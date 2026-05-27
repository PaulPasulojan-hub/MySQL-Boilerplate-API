const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

db.getConnection((err: any, connection: any) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL!');
    connection.release();
  }
});

export default db;