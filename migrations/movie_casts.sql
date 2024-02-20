CREATE TABLE movie_casts (
  movie_id INTEGER NOT NULL,
  cast_id INTEGER NOT NULL,
  PRIMARY KEY (movie_id, cast_id),
  FOREIGN KEY (movie_id) REFERENCES movie (movie_id),
  FOREIGN KEY (cast_id) REFERENCES casts (id)
);