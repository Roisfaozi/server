const fs = require('fs-extra');
const path = require('path');

// Path to your SQL dump file
const sqlFilePath = path.join(__dirname, 'database.sql');

// Directory to save migration files
const migrationsDir = path.join(__dirname, 'migrations');

// Ensure migrations directory exists
fs.ensureDirSync(migrationsDir);

function processStatements(statements) {
  if (statements.length === 0) {
    return;
  }

  const statement = statements.shift();

  // Extract table name
  const tableNameMatch = statement.match(
    /CREATE TABLE if not exists\s+(\S+)\s+\(/i
  );
  if (!tableNameMatch) {
    console.error(`Failed to extract table name from statement: ${statement}`);
    return processStatements(statements); // Continue processing remaining statements
  }
  const tableName = tableNameMatch[1].replace(/public\./, '');

  // Generate migration content
  const migrationContent = generateMigrationContent(tableName, statement);

  // Write to migration file with delay
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, '')
    .slice(0, 14);
  const migrationFileName = `${timestamp}_create_${tableName}_table.js`;
  const migrationFilePath = path.join(migrationsDir, migrationFileName);

  fs.writeFileSync(migrationFilePath, migrationContent, 'utf8');
  console.log(`Migration file created: ${migrationFileName}`);

  // Delay and continue processing remaining statements
  setTimeout(() => processStatements(statements), 1000);
}

// Read SQL file
const sqlContent = fs.readFileSync(sqlFilePath, 'latin1');

// Clean up the content
const cleanedSqlContent = sqlContent.replace(/\x00/g, '');

// Extract CREATE TABLE statements
const createTableStatements = cleanedSqlContent.match(/CREATE TABLE.*?;/gis);

if (!createTableStatements) {
  console.error('No CREATE TABLE statements found.');
  process.exit(1);
}

// Start processing statements
processStatements(createTableStatements.slice()); // Create a copy to avoid modifying original array

function generateMigrationContent(tableName, createTableStatement) {
  // Extract columns from CREATE TABLE statement
  const columnsPart = createTableStatement.match(/\((.*)\)/s)[1].trim();
  const columns = columnsPart.split(',\n').map((line) => line.trim());

  // Generate pgm.createTable columns definition
  const columnDefs = columns
    .map((column) => {
      const [colName, colType] = column.split(/\s+/);
      const notNull = /NOT NULL/.test(column) ? ', notNull: true' : '';
      const isPrimaryKey = /PRIMARY KEY/.test(column);
      const type = colType.replace(/,$/, '').toLowerCase();
      return `        ${colName}: { type: '${type}'${notNull}${isPrimaryKey ? ', primaryKey: true' : ''} }`;
    })
    .join(',\n');

  return `// migrations/${new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, '')
    .slice(0, 14)}_create_${tableName}_table.js

exports.up = (pgm) => {
    pgm.createTable('${tableName}', {
${columnDefs}
    });

    pgm.sql\`ALTER TABLE public.${tableName} OWNER TO rois\`;
};

exports.down = (pgm) => {
    pgm.dropTable('${tableName}');
};
`;
}
