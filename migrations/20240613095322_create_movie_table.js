// migrations/20240612143223_create_movie_table.js

exports.up = (pgm) => {
  pgm.createTable('movie', {
    movie_id: { type: 'serial', primaryKey: true },
    title: { type: 'varchar(255)', notNull: true },
    synopsis: { type: 'text' },
    release_date: { type: 'date' },
    duration: { type: 'integer' },
    rating: { type: 'numeric(3,2)' },
    poster_url: { type: 'varchar(255)' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp' },
  });

  pgm.sql`ALTER TABLE public.movie OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('movie');
};
