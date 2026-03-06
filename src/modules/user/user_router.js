import { Router } from 'express';
import auth from '../../middlewares/auth_mw.js';
import fileUpload from '../../utils/upload_service.js';
import { getUsers, deleteUser, uploadProfilePic } from './user_controller.js';
import asyncHandler from '../../utils/catch_error.js';
const router = Router();


router.get('/', asyncHandler(getUsers));

router.delete('/:id', auth() , asyncHandler(deleteUser));

router.put('/upload/:id', fileUpload().single('image'), asyncHandler(uploadProfilePic));


export default router;