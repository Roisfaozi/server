// migrations/20240612143223_create_schedules_table.js

exports.up = (pgm) => {
  pgm.createTable('schedules', {
    id: { type: 'serial', primaryKey: true },
    premiere_id: { type: 'integer', notNull: true, references: 'premieres' },
    start_time: { type: 'timestamp', notNull: true },
    end_time: { type: 'timestamp', notNull: true },
  });

  pgm.sql`ALTER TABLE public.schedules OWNER TO tickitzz_owner`;
};

exports.down = (pgm) => {
  pgm.dropTable('schedules');
};
