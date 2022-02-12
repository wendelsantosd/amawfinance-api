
import { create } from './create.doc'
import { data } from './data.doc'
import { _delete } from './delete.doc'
import { list } from './list.doc'
import { update } from './update.doc'

const transactionDocs = { 
    ...create,
    ...list,
    ...data,
    ...update,
    ..._delete
}

export { transactionDocs }