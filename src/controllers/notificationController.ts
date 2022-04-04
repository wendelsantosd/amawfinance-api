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

                    const sum = await sumTransactions(transactions)

                    const totalIncome = sum?.income

                    const totalExpense = sum?.expense                                                                                                                      

                    const percentage = (totalExpense*100)/totalIncome

                    const isIncome = totalIncome > 0

                    await prisma.notifications.create({
                        data: {
                            percentage,
                            message: isIncome ? `Você já gastou ${percentage}% da sua receita total` : 'Você não tem receita cadastrada',
                            month: new Date().getMonth(), 
                            year: new Date().getFullYear(),
                            user_id: id,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                    })

                    res.status(201).json({ message: 'notification created'})
                } else {
                    res.status(403).json({ message: 'could not access' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message})
        }
    },

    listByUserMonthYear: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, month, year } = req.query

            if (id && month && year) {
                if (user?.access_level === 'admin' || user?.id === id) {
                    const notifications = await prisma.notifications.findMany({
                        where: {
                            AND: [
                                {
                                    user_id: id
                                },
                                { 
                                    month: parseInt(month)
                                },
                                { 
                                    year: parseInt(year)
                                }
                            ]
                        },
                        orderBy:[
                            {
                                created_at: 'asc'
                            }
                        ]
                    })

                    res.status(200).json(notifications)
                } else {
                    res.status(403).json({ message: 'could not access' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    delete: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, userId } = req.query

            if (id && userId) {
                if (user?.access_level === 'admin' || user?.id === userId) {
                    const notification = await prisma.notifications.findUnique({
                        where: { id }
                    })

                    if (notification) {
                        await prisma.notifications.delete({
                            where: { id}
                        })

                        res.status(200).json({ message: 'notification deleted' })
                    } else {
                        res.status(404).json({ message: 'notification not found' })
                    }
                } else {
                    res.status(403).json({ message: 'could not access' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}