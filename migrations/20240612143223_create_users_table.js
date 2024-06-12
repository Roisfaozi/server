// migrations/20240612143223_create_users_table.js

exports.up = (pgm) => {
  pgm.createTable('users', {
    user_id: { type: 'serial', primaryKey: true },
    username: { type: 'varchar(50)', notNull: true, unique: true },
    password: { type: 'varchar(255)', notNull: true },
    email: { type: 'varchar(255)' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp' },
    role: { type: 'varchar(50)', default: 'user' },
  });

  pgm.sql`ALTER TABLE public.users OWNER TO rois`;
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
