CREATE TABLE movie_genre (
	movie_genre_id serial PRIMARY KEY NOT NULL,
	movie_id int NOT NULL,
	genre_id int NOT NULL,
	CONSTRAINT movie_genre_fk FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
	CONSTRAINT movie_genre_fk_1 FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
);