import { Router, Request, Response } from 'express'

import { userController } from '../controllers/userController'
import { verifyToken } from '../middleware/verifyToken'

const userRoutes = Router()

userRoutes.get('/', (req: Request, res: Response): void => {
    res.redirect(`${process.env.URL_API}/documentation`)
})

userRoutes.post('/user/auth', userController.auth)
userRoutes.post('/user/google-auth', userController.googleAuth)
userRoutes.post('/user/create', userController.create)
userRoutes.get('/user/list', verifyToken, userController.list)
userRoutes.get('/user/data', verifyToken, userController.data)
userRoutes.put('/user/update', verifyToken, userController.update)
userRoutes.delete('/user/delete', verifyToken, userController.delete)
userRoutes.get('/user/confirm-email/:token', userController.confirmEmail)
userRoutes.get('/user/recover-password', userController.recoverPassword)
userRoutes.post('/user/modify-password-by-recover/:token', userController.modifyPasswordByRecover)
userRoutes.patch('/user/modify-password', verifyToken, userController.modifyPassword)
userRoutes.get('/user/modify-email', verifyToken, userController.modifyEmail)
userRoutes.get('/user/alter-email/:email/:token', userController.alterEmail)

export default userRoutes