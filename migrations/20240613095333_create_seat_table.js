// migrations/20240612143223_create_seat_table.js

exports.up = (pgm) => {
  pgm.createTable('seat', {
    seat_id: { type: 'serial', primaryKey: true },
    premiere_id: { type: 'integer', references: 'premieres' },
    row: { type: 'integer' },
    col: { type: 'integer' },
    seat_name: { type: 'varchar(20)' },
    status: {
      type: 'varchar(20)',
      check: "status IN ('available', 'booked', 'reserved')",
    },
  });

  pgm.sql`ALTER TABLE public.seat OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('seat');
};
