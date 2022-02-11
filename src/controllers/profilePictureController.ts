import { Request, Response } from 'express'

import { prisma } from '../database'
import { nowLocalDate } from '../provider/nowLocalDate'
import { CustomPictureProfileRequest, CustomRequest } from '../types'

const profilePictureController = {
    create: async (req: CustomPictureProfileRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.body

            if (id) {
                if (user?.access_level === 'admin' || user?.id === id) {
                    const targetUser = await prisma.users.findUnique({
                        where: {
                            id: user.id
                        }
                    })

                    if (targetUser) {
                        const {
                            originalname: name,
                            size,
                            key: id,
                            location: url = ''
                        } = req.file

                        const existingImage = await prisma.profile_pictures.findUnique({
                            where: {
                                user_id: targetUser.id
                            }
                        })

                        if (existingImage) {
                            await prisma.profile_pictures.delete({
                                where: { 
                                    user_id: targetUser.id
                                }
                            })
                        }

                        await prisma.profile_pictures.create({
                            data: {
                                name,
                                size,
                                id,
                                url,
                                user_id: user.id,
                                created_at: nowLocalDate(),
                                updated_at: nowLocalDate()
                            }
                        })

                        res.status(201).json({ message: 'profile picture created'})
                    } else {
                        res.status(404).json({ message: 'user not found' })
                    }
                } else {
                    res.status(403).json({ message: 'no access' })
                }
            } else {
                res.status(412).json({ message: 'missing arguments'})
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}

export {
    profilePictureController
}