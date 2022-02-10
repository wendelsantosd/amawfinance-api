import {hash, compare } from 'bcrypt'
import { Request, Response } from 'express'
import { sign, verify } from 'jsonwebtoken'


import { config } from '../config'
import { prisma } from '../database'
import { nowLocalDate } from '../provider/nowLocalDate'
import { sendEmail } from '../services/sendEmail'
import { CustomRequest } from '../types'

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
                                    id: user.id,
                                    access_level: user.access_level
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
                        id: userCreated.id
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
    },

    list: async (req: Request, res: Response): Promise<void> => {
        const usersList = await prisma.users.findMany({
            select: {
                id: true,
                name: true,
                access_level: true,
                phone: true,
                email: true
            }
        })

        res.status(200).json(usersList)
    },

    data: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query
            console.log(user)
            if (id) {
                if (user?.access_level ==='admin' || user?.id === id) {
                    const targetUser = await prisma.users.findUnique({
                        where: { id },
                        select: {
                            id: true,
                            name: true,
                            access_level: true,
                            phone: true,
                            email: true
                        }
                    })

                    if (targetUser) {
                        res.status(200).json(targetUser)
                    } else {
                        res.status(404).json({ message: 'target user not found' })
                    }
                } else {
                    res.status(401).json({ message: 'unauthorized' })
                }
            } else {
                res.status(412).json({ message: 'missing id' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message }) 
        }
    },

    update: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query

            if (id) {
                if (user?.access_level ==='admin' || user?.id === id) {
                    const targetUser = await prisma.users.findUnique({
                        where: { id }
                    })

                    if (targetUser) {
                        const data = { ...req.body }

                        delete data?.password
                        delete data?.access_level
                        delete data?.email
                        delete data?.confirmed_email
                        data.updated_at = nowLocalDate()

                        await prisma.users.update({
                            where: { id },
                            data
                        })

                        res.status(200).json({ message: 'user updated' })
                    } else {
                        res.status(404).json({ message: 'target user not found' })
                    }
                } else {
                    res.status(401).json({ message: 'unauthorized' })
                }
            } else {
                res.status(412).json({ message: 'missing id' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message})
        }
    },

    delete: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query

            if (id) {
                if (user?.access_level ==='admin' || user?.id === id) {
                    const targetUser = await prisma.users.findUnique({
                        where: { id }
                    })

                    if (targetUser) {
                        await prisma.users.delete({
                            where: { id }
                        })

                        res.status(200).json({ message: 'user deleted' })
                    } else {
                        res.status(404).json({ message: 'target user not found' })
                    }
                } else {
                    res.status(401).json({ message: 'unauthorized' })
                }
            } else {
                res.status(412).json({ message: 'missing id' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message})
        }
    },

    confirmEmail: async (req: Request, res: Response): Promise<void> => {
        try {
            const { token } = req.params
            
            if (token) {
                const { secret } = config.JWT

                verify(token, secret, async (err, payload) => {
                    if (err) {
                        res.status(401).json({ message: err.message})
                    }

                    const id = payload?.id

                    const user = await prisma.users.findUnique({
                        where: { id }
                    })

                    if (user) {
                        // const { loginUrl } = config.REDIRECT

                        await prisma.users.update({
                            where: { id },
                            data: {
                                confirmed_email: true,
                                updated_at: nowLocalDate()
                            }
                        })

                        res.status(200).json({ message: 'email confirmed' })

                        // res.redirect(loginUrl)
                    } else {
                        res.status(404).json({ message: 'user not found' })
                    }
                })
            } else {
                res.status(412).json({ message: 'missing token' })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}

export { userController }