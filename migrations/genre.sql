CREATE TABLE genres (
	genre_id serial PRIMARY KEY NOT NULL,
	genre_name varchar NOT NULL UNIQUE,
	created_at timestamp without time zone NULL DEFAULT now(),
	updated_at timestamp without time zone NULL,
);