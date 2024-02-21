const db = require("../config/dbConfig");

const models = {
  getAllMovies: async (title, limit, offset) => {
    const query = `
      SELECT
          m.movie_id,
          m.title,
          m.synopsis,
          TO_CHAR(m.release_date, 'DD-MM-YYYY') as release_date,
          m.duration,
          m.rating,
          m.poster_url,
          STRING_AGG(DISTINCT g.genre_name, ', ') AS genres,
          STRING_AGG(DISTINCT c.name, ', ') AS casts,
          STRING_AGG(DISTINCT d.name, ', ') AS directors
      FROM movie m
      INNER JOIN movie_casts mc ON m.movie_id = mc.movie_id
      INNER JOIN casts c ON mc.cast_id = c.id
      INNER JOIN movie_directors md ON m.movie_id = md.movie_id
      INNER JOIN directors d ON md.director_id = d.id
      INNER JOIN movie_genre mg ON m.movie_id = mg.movie_id
      INNER JOIN genres g ON mg.genre_id = g.genre_id
      WHERE m.title LIKE $1
      GROUP BY m.movie_id
      ORDER BY m.movie_id ASC
      LIMIT $2 OFFSET $3;
    `;

    try {
      const mainResult = await db.query(query, [`%${title}%`, limit, offset]);
      const countResult = await db.query(
        "SELECT COUNT(*) AS total FROM movie WHERE title LIKE $1",
        [`%${title}%`]
      );

      const movies = mainResult.rows;

      const meta = {
        next: movies.length === limit ? offset + limit : null,
        prev: offset === 0 ? null : offset - limit,
        total: countResult.rows[0].total,
      };

      if (mainResult.rows <= 0) {
        return "data not found";
      }

      return { data: movies, meta };
    } catch (error) {
      throw new Error(`Error getting all movies: ${error.message}`);
    }
  },

  getMovieById: async (movieId) => {
    const query = `
    SELECT
      m.movie_id,
      m.title,
      m.synopsis,
      TO_CHAR(m.release_date, 'DD-MM-YYYY') as release_date,
      m.duration,
      m.rating,
      m.poster_url,
      STRING_AGG(DISTINCT g.genre_name, ', ') AS genres,
      STRING_AGG(DISTINCT c.name, ', ') AS casts,
      STRING_AGG(DISTINCT d.name, ', ') AS directors
    FROM movie m
    INNER JOIN movie_casts mc ON m.movie_id = mc.movie_id
    INNER JOIN casts c ON mc.cast_id = c.id
    INNER JOIN movie_directors md ON m.movie_id = md.movie_id
    INNER JOIN directors d ON md.director_id = d.id
    INNER JOIN movie_genre mg ON m.movie_id = mg.movie_id
    INNER JOIN genres g ON mg.genre_id = g.genre_id
    WHERE m.movie_id = $1
    GROUP BY m.movie_id;
  `;

    try {
      const result = await db.query(query, [movieId]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error getting movie by ID: ${error.message}`);
    }
  },

  addMovie: async (movieData) => {
    const {
      title,
      synopsis,
      release_date,
      duration,
      rating,
      poster_url,
      genre,
      director,
      casts,
    } = movieData;

    const pg = await db.connect();
    try {
      await pg.query("BEGIN");

      const movieResult = await pg.query(
        `INSERT INTO movie (title, synopsis, release_date, duration, rating, poster_url, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, now(), now())
        RETURNING movie_id;`,
        [title, synopsis, release_date, duration, rating, poster_url]
      );

      const movieId = movieResult.rows[0].movie_id;

      if (genre && genre.length > 0) {
        for await (const v of genre) {
          await pg.query(
            `INSERT INTO movie_genre (movie_id, genre_id)
            VALUES($1, $2)`,
            [movieId, v]
          );
        }
      }

      if (director && director.length > 0) {
        for await (const d of director) {
          await pg.query(
            `INSERT INTO movie_directors (movie_id, director_id)
              VALUES($1, $2)`,
            [movieId, d]
          );
        }
      }

      if (casts && casts.length > 0) {
        for await (const d of casts) {
          await pg.query(
            `INSERT INTO movie_casts (movie_id, cast_id)
              VALUES($1, $2)`,
            [movieId, d]
          );
        }
      }

      await pg.query("COMMIT");

      return movieId;
    } catch (error) {
      await pg.query("ROLLBACK");
      throw new Error(`Error adding movie: ${error.message}`);
    } finally {
      if (pg) {
        pg.release();
      }
    }
  },

  updateMovie: async (movieId, movieData) => {
    const {
      title,
      synopsis,
      release_date,
      duration,
      rating,
      poster_url,
      genre,
      director,
      casts,
    } = movieData;

    const pg = await db.connect();
    try {
      await pg.query("BEGIN");

      const existingMovie = await pg.query(
        "SELECT * FROM movie WHERE movie_id = $1",
        [movieId]
      );
      if (existingMovie.rows.length === 0) {
        throw new Error(`Movie with ID ${movieId} not found.`);
      }

      const result = await pg.query(
        `UPDATE movie 
      SET title = $2, synopsis = $3, release_date = $4, 
      duration = $5, rating = $6, poster_url = $7, updated_at = now()
      WHERE movie_id = $1 RETURNING *`,
        [movieId, title, synopsis, release_date, duration, rating, poster_url]
      );

      if (genre && genre.length > 0) {
        await pg.query("DELETE FROM movie_genres WHERE movie_id = $1", [
          movieId,
        ]);
        for await (const v of genre) {
          await pg.query(
            `INSERT INTO movie_genres (movie_id, genre_id)
          VALUES($1, $2)`,
            [movieId, v]
          );
        }
      }

      if (director && director.length > 0) {
        await pg.query("DELETE FROM movie_directors WHERE movie_id = $1", [
          movieId,
        ]);
        for await (const d of director) {
          await pg.query(
            `INSERT INTO movie_directors (movie_id, director_id)
            VALUES($1, $2)`,
            [movieId, d]
          );
        }
      }

      if (casts && casts.length > 0) {
        await pg.query("DELETE FROM movie_casts WHERE movie_id = $1", [
          movieId,
        ]);
        for await (const c of casts) {
          await pg.query(
            `INSERT INTO movie_casts (movie_id, cast_id)
            VALUES($1, $2)`,
            [mmovieIdovie_id, c]
          );
        }
      }

      await pg.query("COMMIT");

      return result.rows[0];
    } catch (error) {
      await pg.query("ROLLBACK");
      throw new Error(`Error updating movie: ${error.message}`);
    } finally {
      if (pg) {
        pg.release();
      }
    }
  },

  deleteMovie: async (movieId) => {
    const pg = await db.connect();

    try {
      await pg.query("BEGIN");

      const existingMovie = await pg.query(
        "SELECT * FROM movie WHERE movie_id = $1",
        [movieId]
      );
      if (existingMovie.rows.length === 0) {
        throw new Error(`Movie with ID ${movieId} not found.`);
      }

      await pg.query("DELETE FROM movie_genre WHERE movie_id = $1", [movieId]);

      await pg.query("DELETE FROM movie_directors WHERE movie_id = $1", [
        movieId,
      ]);

      await pg.query("DELETE FROM movie_casts WHERE movie_id = $1", [movieId]);

      await pg.query("DELETE FROM movie WHERE movie_id = $1", [movieId]);

      await pg.query("COMMIT");
      return `Movie with ID ${movieId} deleted successfully.`;
    } catch (error) {
      await pg.query("ROLLBACK");
      throw new Error(`Error deleting movie: ${error.message}`);
    } finally {
      if (pg) {
        pg.release();
      }
    }
  },

  searchMovieByTitle: (title) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM movie WHERE title ILIKE $1";
      db.query(query, [`%${title}%`])
        .then((result) => {
          resolve(result.rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  sortMovies: (sortBy) => {
    return new Promise((resolve, reject) => {
      let query;

      if (sortBy === "title") {
        query = "SELECT * FROM movie ORDER BY title";
      } else if (sortBy === "release_year") {
        query = "SELECT * FROM movie ORDER BY release_date";
      } else {
        return reject(new Error("Invalid sort parameter"));
      }

      db.query(query)
        .then((result) => {
          resolve(result.rows);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

module.exports = models;
