// migrations/20240612143223_create_genres_table.js

exports.up = (pgm) => {
  pgm.createTable('genres', {
    genre_id: { type: 'serial', primaryKey: true },
    genre_name: { type: 'varchar', notNull: true, unique: true },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp' },
  });

  pgm.sql`ALTER TABLE public.genres OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('genres');
};
