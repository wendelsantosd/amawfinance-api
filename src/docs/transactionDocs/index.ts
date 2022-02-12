
import { create } from './create.doc'
import { data } from './data.doc'
import { list } from './list.doc'
import { update } from './update.doc'

const transactionDocs = { 
    ...create,
    ...list,
    ...data,
    ...update
}

export { transactionDocs }