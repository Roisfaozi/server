// migrations/20240612143223_create_movie_directors_table.js

exports.up = (pgm) => {
  pgm.createTable('movie_directors', {
    movie_id: {
      type: 'integer',
      notNull: true,
      primaryKey: true,
      references: '"movie"',
      onDelete: 'cascade',
    },
    director_id: {
      type: 'integer',
      notNull: true,
      primaryKey: true,
      references: '"directors"',
      onDelete: 'cascade',
    },
  });

  pgm.sql`ALTER TABLE public.movie_directors OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie_directors');
};
