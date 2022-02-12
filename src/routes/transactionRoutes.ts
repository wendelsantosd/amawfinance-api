import { Router } from 'express'

import { transactionController } from '../controllers/transactionController'
import { verifyToken } from '../middleware/verifyToken'

const transactionRoutes = Router()

transactionRoutes.post('/transaction/create', verifyToken, transactionController.create)
transactionRoutes.get('/transaction/list', verifyToken, transactionController.list)
transactionRoutes.get('/transaction/data', verifyToken, transactionController.data)
transactionRoutes.put('/transaction/update', verifyToken, transactionController.update)
transactionRoutes.delete('/transaction/delete', verifyToken, transactionController.delete)

export default transactionRoutes