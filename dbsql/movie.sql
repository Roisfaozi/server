CREATE TABLE movie (
    movie_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NULL,
    release_date DATE NULL,
    duration INT NULL,
    rating DECIMAL(3, 2) NULL,
    poster_url VARCHAR(255) NULL,
    created_at timestamp without time zone NULL DEFAULT now(),
    updated_at timestamp without time zone NULL
);