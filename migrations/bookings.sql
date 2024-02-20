CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  schedule_id INTEGER NOT NULL,
  user_id INTEGER,
  seat_number INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY (schedule_id) REFERENCES schedules (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);