import {hash, compare } from 'bcrypt'
import { Request, Response } from 'express'
import { sign, verify } from 'jsonwebtoken'

import { config } from '../config'
import { prisma } from '../database'

const userController = {
    auth: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.query

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
    }
}

export { userController }