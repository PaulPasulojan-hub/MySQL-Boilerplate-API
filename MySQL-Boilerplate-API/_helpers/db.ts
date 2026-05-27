const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'id-dci-web1631.main-hosting.eu',
  port: 3306,
  user: 'u875409848_pasulojan',
  password: '2qW^sUg=M',
  database: 'u875409848_pasulojan'
});

export default db;
