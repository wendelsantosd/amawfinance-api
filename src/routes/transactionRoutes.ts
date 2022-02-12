import { Router } from 'express'

import { transactionController } from '../controllers/transactionController'
import { verifyToken } from '../middleware/verifyToken'

const transactionRoutes = Router()

transactionRoutes.post('/transaction/create', verifyToken, transactionController.create)
transactionRoutes.get('/transaction/list', verifyToken, transactionController.list)

export default transactionRoutes