CREATE TABLE seat (
    seat_id SERIAL PRIMARY KEY,
    premiere_id INTEGER REFERENCES premieres(id),
    row INTEGER,
    col INTEGER,
    seat_name VARCHAR(20),
    status VARCHAR(20) CHECK (status IN ('available', 'booked', 'reserved'))
);