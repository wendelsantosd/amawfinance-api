import {hash, compare } from 'bcrypt'
import { Request, Response } from 'express'
import { sign, verify } from 'jsonwebtoken'
import { nowLocalDate } from 'provider/nowLocalDate'
import { sendEmail } from 'services/sendEmail'

import { config } from '../config'
import { prisma } from '../database'

const userController = {
    auth: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            if (email && password) {
                const user = await prisma.users.findUnique({
                    where: {
                        email: String(email)
                    }
                })

                if (user) {
                    if (user.confirmed_email) {
                        const isValid = await compare(
                            String(password),
                            user.password
                        )

                        if (isValid) {
                            const { secret, expTime } = config.JWT

                            const token = sign(
                                {
                                    id: user.id
                                },
                                secret,
                                {
                                    expiresIn: expTime
                                }
                            )

                            res.status(200).json(token)
                        } else {
                            res.status(401).json({ message: 'email or password incorrect' })
                        }
                    } else {
                        res.status(401).json({ message: 'email not confirmed' })
                    }
                } else {
                    res.status(401).json({ message: 'email or password incorrect' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    create: async (req: Request, res: Response): Promise<void> => {
        try {
            const data = { ...req.body }

            const { password } = data
    
            const hashedPassword = await hash(password, 8)

            data.password = hashedPassword
            data.access_level = 'client'
            data.created_at = nowLocalDate()
            data.updated_at = nowLocalDate()

            delete data?.confirmed_email

            const userCreated = await prisma.users.create({data})

            if (userCreated) {
                const { secret } = config.JWT
                const { email } = userCreated

                const token = sign(
                    {
                        email: data.email
                    },
                    secret,
                    {
                        expiresIn: '1d'
                    }
                )

                sendEmail(email, token, 'confirmEmail')

                res.status(201).json({ message: 'user created' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.messages})
        }
    }
}

export { userController }