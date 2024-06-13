CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,
  premiere_id INTEGER NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  FOREIGN KEY (premiere_id) REFERENCES premieres (id)
);