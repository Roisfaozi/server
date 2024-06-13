CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER NOT NULL,
  seat_number INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY (booking_id) REFERENCES bookings (id)
);