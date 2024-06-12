// migrations/20240612143223_create_movie_directors_table.js

exports.up = (pgm) => {
  pgm.createTable('movie_directors', {
    movie_id: { type: 'integer', notNull: true, references: 'movie' },
    director_id: { type: 'integer', notNull: true, references: 'directors' },
    primaryKey: { type: 'primaryKey', columns: ['movie_id', 'director_id'] },
  });

  pgm.sql`ALTER TABLE public.movie_directors OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie_directors');
};
