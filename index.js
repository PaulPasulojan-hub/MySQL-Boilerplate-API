const express = require('express');
const mysql = require('mysql2');
const config = require('./config.json');

const app = express();
app.use(express.json());

// DB Connection
const db = mysql.createConnection(config.db);
db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL!');
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

app.listen(config.server.port, () => {
  console.log(`Server on port ${config.server.port}`);
});