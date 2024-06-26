// migrations/20240612143223_create_movie_casts_table.js

exports.up = (pgm) => {
  pgm.createTable('movie_casts', {
    movie_id: {
      type: 'integer',
      primaryKey: true,
      notNull: true,
    },
    cast_id: {
      type: 'integer',
      notNull: true,
      primaryKey: true,
      references: '"casts"',
      onDelete: 'cascade',
    },
  });

  pgm.sql`ALTER TABLE public.movie_casts OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie_casts');
};
