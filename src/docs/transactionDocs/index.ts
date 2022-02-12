
import { create } from './create.doc'
import { data } from './data.doc'
import { list } from './list.doc'

const transactionDocs = { 
    ...create,
    ...list,
    ...data
}

export { transactionDocs }