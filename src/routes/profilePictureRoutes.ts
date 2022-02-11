import { Router } from 'express'
import multer from 'multer'


import { profilePictureController } from '../controllers/profilePictureController'
import { verifyToken } from '../middleware/verifyToken'
import { multerConfig } from '../services/storageFiles'

const profilePictureRoutes = Router()

profilePictureRoutes.post(
    '/profile-picture/create',
    verifyToken,
    multer(multerConfig).single('file'),
    profilePictureController.create
)

profilePictureRoutes.get('/profile-picture/list', verifyToken, profilePictureController.list)

export default profilePictureRoutes