import { alterEmail } from './alterEmail.doc'
import { auth } from './auth.doc'
import { confirmEmail } from './confirmEmail.doc'
import { create } from './create.doc'
import { data } from './data.doc'
import { _delete } from './delete.doc'
import { googleAuth } from './googleAuth.doc'
import { list } from './list.doc'
import { modifyEmail } from './modifyEmail.doc'
import { modifyPassword } from './modifyPassword.doc'
import { modifyPasswordByRecover } from './modifyPasswordByRecover.doc'
import { recoverPassword } from './recoverPassword.doc'
import { update } from './update.doc'

const userDocs = { 
    ...auth,
    ...create,
    ...list,
    ...data,
    ...update,
    ..._delete,
    ...confirmEmail,
    ...recoverPassword,
    ...modifyPasswordByRecover,
    ...modifyPassword,
    ...modifyEmail,
    ...alterEmail,
    ...googleAuth
}

export { userDocs}