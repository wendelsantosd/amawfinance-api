import { auth } from './auth.doc'
import { create } from './create.doc'

const UserControllerDocs = { 
    ...auth,
    ...create
}

export { UserControllerDocs}