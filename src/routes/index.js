import express from 'express';
import { testEnv } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnv }));

export default indexRouter;
