CREATE TABLE premieres (
  id SERIAL PRIMARY KEY,
  premiere_name VARCHAR(50);
  movie_id INTEGER NOT NULL,
  location_id INTEGER NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  total_seat INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (movie_id),
  FOREIGN KEY (location_id) REFERENCES locations (id)
);