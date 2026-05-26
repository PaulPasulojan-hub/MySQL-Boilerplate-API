import express from 'express';

const config = require('./config.json');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

const PORT = process.env.PORT || config.server.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;