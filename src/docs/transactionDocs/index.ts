
import { create } from './create.doc'
import { list } from './list.doc'

const transactionDocs = { 
    ...create,
    ...list
}

export { transactionDocs }