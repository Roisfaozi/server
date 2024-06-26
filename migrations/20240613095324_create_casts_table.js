// migrations/20240612143223_create_casts_table.js

exports.up = (pgm) => {
  pgm.createTable('casts', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
  });

  pgm.sql`ALTER TABLE public.casts OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('casts');
};
