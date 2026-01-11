import express from 'express';
import {
  register,
  login,
  getProfile,
  updateProfile
} from '../controllers/authController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.route('/profile')
  .get(protect, getProfile)
  .put(protect, updateProfile);

export default router;