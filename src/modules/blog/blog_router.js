import { Router } from 'express';
import auth from '../../middlewares/auth_mw.js';
import { getAllBlogs, createBlog, getDetails } from './blog_controller.js';
import asyncHandler from '../../utils/catch_error.js';
import { blogDetailsSchema, createBlogSchema } from './blog_validation.js'; 


const router = Router();

router.get('/getAll/', asyncHandler(getAllBlogs));

router.post('/create/', auth(), asyncHandler(createBlog));

router.get('/getDetails/:id', asyncHandler(getDetails));

export default router; 