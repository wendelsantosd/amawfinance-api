
import { create } from './create.doc'
import { _delete } from './delete.doc'
import { listByUserMonthYear } from './listByUserMonthYear.doc'
import { updateViewed } from './updateViewed.doc'

const notificationDocs = { 
    ...create,
    ...updateViewed,
    ..._delete,
    ...listByUserMonthYear
}

export { notificationDocs }