import { auth } from './auth.doc'
import { confirmEmail } from './confirmEmail.doc'
import { create } from './create.doc'
import { data } from './data.doc'
import { _delete } from './delete.doc'
import { list } from './list.doc'
import { modifyPasswordByRecover } from './modifyPasswordByRecover.doc'
import { recoverPassword } from './recoverPassword.doc'
import { update } from './update.doc'

const UserControllerDocs = { 
    ...auth,
    ...create,
    ...list,
    ...data,
    ...update,
    ..._delete,
    ...confirmEmail,
    ...recoverPassword,
    ...modifyPasswordByRecover
}

export { UserControllerDocs}