import { Router } from 'express';
import { register, login, googleLogin, verifyOtp, resendOtp } from '../controllers/authController';

const authRouter = Router();

// POST /api/auth/register
authRouter.post('/register', register);

// POST /api/auth/login
authRouter.post('/login', login);

// POST /api/auth/verify-otp
authRouter.post('/verify-otp', verifyOtp);

// POST /api/auth/resend-otp
authRouter.post('/resend-otp', resendOtp);

// POST /api/auth/google
authRouter.post('/google', googleLogin);

export default authRouter;
