CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    email VARCHAR(255)
);

CREATE TABLE genre (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(255)
);

CREATE TABLE movie (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    synopsis TEXT,
    release_date DATE,
    duration INT,
    rating DECIMAL(3, 2),
    poster_url VARCHAR(255),
    casts TEXT,
    director VARCHAR(255),
    genre_id INT REFERENCES genre(genre_id)
);

CREATE TABLE schedule (
    schedule_id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movie(movie_id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    premiere BOOLEAN,
    location VARCHAR(255),
    start_date DATE,
    end_date DATE,
    ticket_slot INT,
    theater_number INT
);

CREATE TABLE booking (
    booking_id SERIAL PRIMARY KEY,
    seat_number VARCHAR(10),
    customer_name VARCHAR(255),
    booking_time TIMESTAMP,
    movie_id INT REFERENCES movie(movie_id),
    price DECIMAL(8, 2),
    user_id INT REFERENCES users(user_id),
    schedule_id INT REFERENCES schedule(schedule_id)
);

CREATE TABLE movie_genre (
    movie_id INT REFERENCES movie(movie_id),
    genre_id INT REFERENCES genre(genre_id),
    PRIMARY KEY (movie_id, genre_id)
);


CREATE TABLE trailer (
    trailer_id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movie(movie_id),
    trailer_url VARCHAR(255)
);
