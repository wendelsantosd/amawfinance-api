
import { create } from './create.doc'
import { data } from './data.doc'
import { _delete } from './delete.doc'
import { list } from './list.doc'

const profilePictureDocs = { 
    ...create,
    ...list,
    ...data,
    ..._delete
}

export { profilePictureDocs}