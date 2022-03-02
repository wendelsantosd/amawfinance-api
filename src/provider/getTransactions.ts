import { getTransactionsProps } from 'types'

import { prisma } from '../database'



export const getTransactions = async ({id, month, year}: getTransactionsProps) =>
    await prisma.transactions.findMany({
        where: {
            AND: [
                {
                    user_id: id
                },
                { 
                    month
                },
                { 
                    year: Number(year)
                }
            ]
        },
        select: {
            amount: true,
            type: true
        }
    })