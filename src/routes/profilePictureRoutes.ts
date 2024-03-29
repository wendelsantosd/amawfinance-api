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
profilePictureRoutes.get('/profile-picture/data', verifyToken, profilePictureController.data)
profilePictureRoutes.delete('/profile-picture/delete', verifyToken, profilePictureController.delete)

export default profilePictureRoutes