import { Response } from 'express'

import { prisma } from '../database'
import { getTransactions } from '../provider/getTransactions'
import { nowLocalDate } from '../provider/nowLocalDate'
import { sumTransactions } from '../provider/sumTransactions'
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
                        delete data.created_at
                        delete data.user_id
                        delete data.year
                        delete data.month
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
                        orderBy:[
                            {
                                created_at: 'asc'
                            }
                        ],
                        select: {
                            id: true,
                            description: true,
                            amount: true,
                            type: true,
                            created_at: true
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
    },

    listByUserYear: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id, year } = req.query

            if (id && year) {
                if (user?.access_level === 'admin' || user?.id === id) {
                    const janT = await getTransactions({id, month: 0, year})
                    const febT = await getTransactions({id, month: 1, year})
                    const marT = await getTransactions({id, month: 2, year})
                    const aprT = await getTransactions({id, month: 3, year})
                    const mayT = await getTransactions({id, month: 4, year})
                    const junT = await getTransactions({id, month: 5, year})
                    const julT = await getTransactions({id, month: 6, year})
                    const augT = await getTransactions({id, month: 7, year})
                    const sepT = await getTransactions({id, month: 8, year})
                    const octT = await getTransactions({id, month: 9, year})
                    const novT = await getTransactions({id, month: 10, year})
                    const decT = await getTransactions({id, month: 11, year})

                    const sumJanT = sumTransactions(janT)
                    const sumFevT = sumTransactions(febT)
                    const sumMarT = sumTransactions(marT)
                    const sumAprT = sumTransactions(aprT)
                    const sumMayT = sumTransactions(mayT)
                    const sumJunT = sumTransactions(junT)
                    const sumJulT = sumTransactions(julT)
                    const sumAugT = sumTransactions(augT)
                    const sumSepT = sumTransactions(sepT)
                    const sumOctT = sumTransactions(octT)
                    const sumNovT = sumTransactions(novT)
                    const sumDecT = sumTransactions(decT)
                    
                    res.status(200).json({
                        sumJanT,
                        sumFevT,
                        sumMarT,
                        sumAprT,
                        sumMayT,
                        sumJunT,
                        sumJulT,
                        sumAugT,
                        sumSepT,
                        sumOctT,
                        sumNovT,
                        sumDecT
                    })
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