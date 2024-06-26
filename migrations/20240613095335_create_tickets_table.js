// migrations/20240612143223_create_tickets_table.js

exports.up = (pgm) => {
  pgm.createTable('tickets', {
    id: { type: 'serial', primaryKey: true },
    booking_id: { type: 'integer', notNull: true, references: 'bookings' },
    seat_number: { type: 'integer', notNull: true },
    price: { type: 'numeric(10,2)', notNull: true },
    created_at: { type: 'timestamp', notNull: true },
  });

  pgm.sql`ALTER TABLE public.tickets OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('tickets');
};
