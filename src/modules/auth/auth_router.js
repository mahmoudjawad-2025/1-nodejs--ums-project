import { Router } from 'express';
import { registerSchema, loginSchema } from './auth_validation.js';
import validation from '../../middlewares/validation_mw.js';
import { registerUser, loginUser } from './auth_controller.js';
import asyncHandler from '../../utils/catch_error.js';
const router = Router();


router.post('/register', validation(registerSchema), asyncHandler(registerUser));


router.post('/login', validation(loginSchema), asyncHandler(loginUser));

export default router;