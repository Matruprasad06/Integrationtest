const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

console.log("HOST:", process.env.POSTGRES_HOST);
console.log("USER:", process.env.POSTGRES_USER);
console.log("DB:", process.env.POSTGRES_DB);

client.connect()
  .then(() => {
    console.log('✓ Successfully connected to PostgreSQL');
    client.end();
  })
  .catch(err => {
    console.error('Full Error:', err);
    process.exit(1);
  });