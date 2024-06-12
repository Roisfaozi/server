// migrations/20240612143223_create_premieres_table.js

exports.up = (pgm) => {
  pgm.createTable('premieres', {
    id: { type: 'serial', primaryKey: true },
    movie_id: { type: 'integer', notNull: true, references: 'movie' },
    location_id: { type: 'integer', notNull: true, references: 'locations' },
    date: { type: 'date', notNull: true },
    time: { type: 'time', notNull: true },
    total_seat: { type: 'integer', notNull: true },
    premiere_name: { type: 'varchar(50)' },
  });

  pgm.sql`ALTER TABLE public.premieres OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('premieres');
};
