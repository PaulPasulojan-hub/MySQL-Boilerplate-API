import { Router, Request, Response, NextFunction } from 'express';
import * as service from './account.service';

const router = Router();

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await service.register(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
});

export default router;