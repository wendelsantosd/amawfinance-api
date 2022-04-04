import { Router } from 'express'

import { notificationController } from '../controllers/notificationController'
import { verifyToken } from '../middleware/verifyToken'

const notificationRoutes = Router()

notificationRoutes.post('/notification/create', verifyToken, notificationController.create)
notificationRoutes.get('/notification/list-by-user-month-year', verifyToken, notificationController.listByUserMonthYear)
notificationRoutes.delete('/notification/delete', verifyToken, notificationController.delete)

export default notificationRoutes