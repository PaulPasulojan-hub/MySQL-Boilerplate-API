import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './_middleware/error-handler';
import accountsController from './accounts/account.controller';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Routes
app.use('/accounts', accountsController);

// Swagger docs
try {
    const swaggerDoc = require('./swagger.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
} catch {}

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
