import mysql from 'mysql2/promise';

const config = require('../config.json');

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST || config.database.host,
    user: process.env.DATABASE_USER || config.database.user,
    password: process.env.DATABASE_PASSWORD || config.database.password,
    database: process.env.DATABASE_NAME || config.database.database,
    port: Number(process.env.DATABASE_PORT) || config.database.port || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection()
    .then(connection => {
        console.log('Database connected successfully');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    });

export const query = async (sql: string, params?: any[]) => {
    const [rows] = await pool.query(sql, params);
    return rows;
};

export default pool;