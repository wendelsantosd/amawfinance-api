import { hash } from 'bcrypt'
import { v4 as uuid } from 'uuid'

import { prisma } from '../database'
import { nowLocalDate } from '../provider/nowLocalDate'

const create = async () => {
    const password = 'admin'
    const hashedPassword = await hash(password, 8)
    const confirmed_email = true
    
    await prisma.$queryRaw`
        INSERT INTO users(
            id,
            name,
            access_level,
            phone,
            email,
            password,
            confirmed_email,
            created_at,
            updated_at
        )
        values(
            ${uuid()},
            'administrador',
            'admin',
            '91984379366',
            'admin@provider.com',
            ${hashedPassword},
            ${confirmed_email},
            ${nowLocalDate()},
            ${nowLocalDate()}
        )
    `
    await prisma.$disconnect()

}

create()
    .then(() => console.log('admin user created'))
    .catch(err => console.log(err.message))
