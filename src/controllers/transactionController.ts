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

                    const month = new Date(nowLocalDate()).getMonth()
                    const year = new Date(nowLocalDate()).getFullYear()

                    data.user_id = id
                    data.month = month
                    data.year = year
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
    },

    list: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req

            if (user?.access_level === 'admin') {
                const transactions = await prisma.transactions.findMany()

                res.status(200).json(transactions)
            } else {
                res.status(403).json({ message: 'could not access' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    data: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, userId } = req.query

            if (id && userId) {
                if (user?.access_level === 'admin' || user?.id === userId) {
                    const transaction = await prisma.transactions.findUnique({
                        where: { id }
                    })

                    if (transaction) {
                        res.status(200).json(transaction)
                    } else {
                        res.status(404).json({ message: 'transaction not found' })
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
    },

    update: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, userId } = req.query

            if (id && userId) {
                if (user?.access_level === 'admin' || user?.id === userId) {
                    const transaction = await prisma.transactions.findUnique({
                        where: { id }
                    })

                    if (transaction) {
                        const data = { ...req.body }

                        delete data.userId
                        data.updated_at = nowLocalDate()

                        await prisma.transactions.update({
                            where: { id },
                            data
                        })

                        res.status(200).json({ message: 'transaction updated' })
                    } else {
                        res.status(404).json({ message: 'transaction not found' })
                    }
                } else {
                    res.status(403).json({ message: 'could not access'})
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message})
        }
    },

    delete: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, userId } = req.query

            if (id && userId) {
                if (user?.access_level === 'admin' || user?.id === userId) {
                    const transaction = await prisma.transactions.findUnique({
                        where: { id }
                    })

                    if (transaction) {
                        await prisma.transactions.delete({
                            where: { id}
                        })

                        res.status(200).json({ message: 'transaction deleted' })
                    } else {
                        res.status(404).json({ message: 'transaction not found' })
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
    },

    listByUserMonthYear: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, month, year } = req.query

            if (id && month && year) {
                if (user?.access_level === 'admin' || user?.id === id) {
                    const transactions = await prisma.transactions.findMany({
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
                        select: {
                            id: true,
                            description: true,
                            amount: true,
                            type: true
                        }
                    })

                    res.status(200).json(transactions)
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

export {
    transactionController
}