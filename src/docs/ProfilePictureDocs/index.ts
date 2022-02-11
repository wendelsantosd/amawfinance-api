
import { create } from './create.doc'
import { data } from './data.doc'
import { list } from './list.doc'

const ProfilePictureDocs = { 
    ...create,
    ...list,
    ...data
}

export { ProfilePictureDocs}