const db = require('../config/dbConfig');

const models = {
  getAllMovies(page, pageSize) {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * pageSize;
      const query = `
      SELECT * FROM movie
      ORDER BY title
      OFFSET $1 LIMIT $2
    `;
      db.query(query, [offset, pageSize])
        .then((result) => resolve(result.rows))
        .catch((error) =>
          reject(new Error(`Error getting all movies: ${error.message}`))
        );
    });
  },

  getMovieById(movieId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM movie WHERE movie_id = $1', [movieId])
        .then((result) => {
          if (result.rows.length === 0) {
            console.log(movieId);
            reject(new Error('Movie not found'));
          } else {
            resolve(result.rows[0]);
          }
        })
        .catch((error) => {
          reject(new Error(`Error getting movie by ID: ${error.message}`));
        });
    });
  },

  addMovie({
    title,
    synopsis,
    releaseDate,
    duration,
    rating,
    posterUrl,
    casts,
    director,
    genreId,
  }) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO movie (title, synopsis, release_date, duration, rating, poster_url, casts, director, genre_id) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
      db.query(query, [
        title,
        synopsis,
        releaseDate,
        duration,
        rating,
        posterUrl,
        casts,
        director,
        genreId,
      ])
        .then((result) => resolve(result.rows[0]))
        .catch((error) =>
          reject(new Error(`Error adding movie: ${error.message}`))
        );
    });
  },

  updateMovie(
    movieId,
    {
      title,
      synopsis,
      releaseDate,
      duration,
      rating,
      posterUrl,
      casts,
      director,
      genreId,
    }
  ) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE movie 
        SET title=$1, synopsis=$2, release_date=$3, duration=$4, rating=$5, poster_url=$6, casts=$7, director=$8, genre_id=$9
        WHERE movie_id = $10 RETURNING *`;
      db.query(query, [
        title,
        synopsis,
        releaseDate,
        duration,
        rating,
        posterUrl,
        casts,
        director,
        genreId,
        movieId,
      ])
        .then((result) => {
          if (result.rows.length === 0) {
            reject(new Error('Movie not found'));
          } else {
            resolve(result.rows[0]);
          }
        })
        .catch((error) =>
          reject(new Error(`Error updating movie: ${error.message}`))
        );
    });
  },

  deleteMovie(movieId) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM movie WHERE movie_id = $1 RETURNING *';
      db.query(query, [movieId])
        .then((result) => {
          if (result.rows.length === 0) {
            reject(new Error('Movie not found'));
          } else {
            resolve(result.rows[0]);
          }
        })
        .catch((error) =>
          reject(new Error(`Error deleting movie: ${error.message}`))
        );
    });
  },

  searchMovieByTitle: (title) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM movie WHERE title ILIKE $1';
      db.query(query, [`%${title}%`])
        .then((result) => {
          resolve(result.rows);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },

  sortMovies: (sortBy) => {
    return new Promise((resolve, reject) => {
      let query;

      if (sortBy === 'title') {
        query = 'SELECT * FROM movie ORDER BY title';
      } else if (sortBy === 'release_year') {
        query = 'SELECT * FROM movie ORDER BY release_date';
      } else {
        return reject(new Error('Invalid sort parameter'));
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
