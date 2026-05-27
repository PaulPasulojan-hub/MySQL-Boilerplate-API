import express from 'express';
import cookieParser from 'cookie-parser';
import accountRouter from './accounts/account.controller';
import errorHandler from './_middleware/error-handler';
import './_helpers/db';

const config = require('./config.json');
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/accounts', accountRouter);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.json({ message: 'API is running!' });
});

const PORT = process.env.PORT || config.server.port || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;