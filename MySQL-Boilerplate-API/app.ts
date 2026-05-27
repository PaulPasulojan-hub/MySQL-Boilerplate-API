import express from 'express';
import db from './_helpers/db.js';

const config = require('./config.json');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

db.connect((err: any) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('Connected to MySQL!');
    app.listen(config.server.port, () => {
      console.log('Server running on port ' + config.server.port);
    });
  }
});

export default app;
