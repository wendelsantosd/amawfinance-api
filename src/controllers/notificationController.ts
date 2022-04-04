import { Response } from 'express'
import { CustomRequest } from 'types'

import { prisma } from '../database'
import { sumTransactions } from '../provider/sumTransactions'

export const notificationController = {
    create: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query

            if (id) {
                if(user?.access_level === 'admin' || user?.id === id) {
                    const transactions = await prisma.transactions.findMany({
                        where: {
                            AND: [
                                {
                                    user_id: id
                                },
                                {
                                    month: new Date().getMonth()
                                },
                                {
                                    year: new Date().getFullYear()
                                }
                            ]
                        }
                    })

                    const sum = sumTransactions(transactions)

                    const totalIncome = sum?.income

                    const totalExpense = sum?.expense

                    const percentage = totalIncome/100*totalExpense

                    await prisma.notifications.create({
                        data: {
                            percentage,
                            message: `Você já gastou ${percentage}% da sua receita total`,
                            month: new Date().getMonth(), 
                            year: new Date().getFullYear(),
                            user_id: id,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                    })

                 
                } else {
                    res.status(403).json({ message: 'could not access' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message})
        }
    }
}