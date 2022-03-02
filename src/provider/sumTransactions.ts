export const sumTransactions = (transactions) => 
    transactions?.reduce((acc: any, transaction: any) => {
        if (transaction?.type == 'income') {
            acc.income += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.expense += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        income: 0,
        expense: 0,
        total: 0
    })