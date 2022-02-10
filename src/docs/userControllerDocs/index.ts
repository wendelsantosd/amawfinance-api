import { auth } from './auth.doc'
import { create } from './create.doc'
import { list } from './list.doc'

const UserControllerDocs = { 
    ...auth,
    ...create,
    ...list
}

export { UserControllerDocs}