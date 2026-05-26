const mysql = require('mysql2');
const config = require('../config.json');

const db = mysql.createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

db.connect((err: any) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL!');
  }
});

db.on('error', (err: any) => {
  console.error('DB error:', err.message);
});

export default db;