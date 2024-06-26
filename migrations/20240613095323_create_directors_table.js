// migrations/20240612143223_create_directors_table.js

exports.up = (pgm) => {
  pgm.createTable('directors', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
  });

  pgm.sql`ALTER TABLE public.directors OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('directors');
};
