import express from 'express';
import db from './_helpers/db';

const config = require('./config.json');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

const PORT = process.env.PORT || config.server.port;

db.getConnection((err: any, connection: any) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL!');
    connection.release();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;   