
import { create } from './create.doc'
import { data } from './data.doc'
import { _delete } from './delete.doc'
import { list } from './list.doc'
import { listByUserMonthYear } from './listByUserMonthYear.doc'
import { listByUserYear } from './listByUserYear.doc'
import { listByUserYearCategory } from './listByUserYearCategory.doc'
import { update } from './update.doc'

const transactionDocs = { 
    ...create,
    ...list,
    ...data,
    ...update,
    ..._delete,
    ...listByUserMonthYear,
    ...listByUserYear,
    ...listByUserYearCategory
}

export { transactionDocs }