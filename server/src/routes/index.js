import express from 'express';
import user from './userRoutes.js';

const router = express.Router();

// api/v1/user
router.use('/user', user);

export default router;
