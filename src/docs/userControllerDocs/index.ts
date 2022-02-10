import { auth } from './auth.doc'
import { create } from './create.doc'
import { data } from './data.doc'
import { list } from './list.doc'
import { update } from './update.doc'

const UserControllerDocs = { 
    ...auth,
    ...create,
    ...list,
    ...data,
    ...update
}

export { UserControllerDocs}