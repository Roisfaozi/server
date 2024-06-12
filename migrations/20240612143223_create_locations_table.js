// migrations/20240612143223_create_locations_table.js

exports.up = (pgm) => {
  pgm.createTable('locations', {
    id: { type: 'serial', primaryKey: true },
    city: { type: 'varchar(255)', notNull: true },
    address: { type: 'varchar(255)', notNull: true },
  });

  pgm.sql`ALTER TABLE public.locations OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('locations');
};
