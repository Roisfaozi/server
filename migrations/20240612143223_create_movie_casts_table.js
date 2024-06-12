// migrations/20240612143223_create_movie_casts_table.js

exports.up = (pgm) => {
  pgm.createTable('movie_casts', {
    movie_id: { type: 'integer', notNull: true },
    cast_id: { type: 'integer', notNull: true, references: 'casts' },
    primaryKey: { type: 'primaryKey', columns: ['movie_id', 'cast_id'] },
  });

  pgm.sql`ALTER TABLE public.movie_casts OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie_casts');
};
