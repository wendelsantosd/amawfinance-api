export const sumTransactionsByCategory = transactions => 
    transactions?.reduce((acc: any, transaction: any) => {
        if (transaction?.type == 'expense' && transaction?.category == 'Moradia') {
            acc.home += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Educação/Cultura') {
            acc.education += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Alimentação') {
            acc.food += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Saúde') {
            acc.health += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Transporte') {
            acc.transport += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Lazer') {
            acc.leisure += transaction.amount
        } else if (transaction?.type == 'expense' && transaction?.category == 'Vestuário') {
            acc.clothing += transaction.amount
        } 
        return acc
    }, {
        home: 0,
        education: 0,
        food: 0,
        health: 0,
        transactions: 0,
        leisure: 0,
        clothing: 0
    })