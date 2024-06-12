// migrations/20240612143223_create_bookings_table.js

exports.up = (pgm) => {
  pgm.createTable('bookings', {
    booking_id: { type: 'serial', primaryKey: true },
    user_id: { type: 'integer', notNull: true, references: 'users' },
    schedule_id: { type: 'integer', notNull: true, references: 'schedules' },
    seat_id: { type: 'integer', notNull: true, references: 'seat' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
  });

  pgm.sql`ALTER TABLE public.bookings OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('bookings');
};
