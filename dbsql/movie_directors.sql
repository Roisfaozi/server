CREATE TABLE movie_directors (
  movie_id INTEGER NOT NULL,
  director_id INTEGER NOT NULL,
  PRIMARY KEY (movie_id, director_id),
  FOREIGN KEY (movie_id) REFERENCES movie (movie_id),
  FOREIGN KEY (director_id) REFERENCES directors (id)
);