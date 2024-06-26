// migrations/20240612143223_create_movie_genre_table.js

exports.up = (pgm) => {
  pgm.createTable('movie_genre', {
    movie_genre_id: {
      type: 'serial',
      primaryKey: true,
    },
    movie_id: {
      type: 'integer',
      notNull: true,
      references: '"movie"',
      onDelete: 'cascade',
    },
    genre_id: {
      type: 'integer',
      notNull: true,
      references: '"genres"',
      onDelete: 'cascade',
    },
  });

  pgm.sql`ALTER TABLE public.movie_genre OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie_genre');
};
