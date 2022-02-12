import { Response } from 'express'

import { prisma } from '../database'
import { nowLocalDate } from '../provider/nowLocalDate'
import { CustomRequest } from '../types'


const transactionController = {
    create: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query
            const data = { ...req.body }

            if (id) {
                if (user?.access_level === 'admin' || user?.id === id) {
                    data.user_id = id
                    data.created_at = nowLocalDate()
                    data.updated_at = nowLocalDate()

                    await prisma.transactions.createMany({data})

                    res.status(201).json({ message: 'transaction created'})
                } else {
                    res.status(403).json({ message: 'could not access'})
                }
            } else {
                res.status(412).json({ message: 'missing id' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}

export {
    transactionController
}