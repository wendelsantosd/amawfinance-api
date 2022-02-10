import { Router, Request, Response } from 'express'

import { userController } from '../controllers/userController'
import { verifyToken } from '../middleware/verifyToken'

const userRoutes = Router()

userRoutes.get('/', (req: Request, res: Response): void => {
    res.redirect('http://localhost:3333/documentation')
})

userRoutes.post('/user/auth', userController.auth)
userRoutes.post('/user/create', userController.create)
userRoutes.get('/user/list', verifyToken, userController.list)
userRoutes.get('/user/data', verifyToken, userController.data)

export default userRoutes