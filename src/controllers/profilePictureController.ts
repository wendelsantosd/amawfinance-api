import aws from 'aws-sdk'
import { Response } from 'express'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { config } from '../config'
import { prisma } from '../database'
import { nowLocalDate } from '../provider/nowLocalDate'
import { CustomPictureProfileRequest, CustomRequest } from '../types'

const s3: any = new aws.S3()

const profilePictureController = {
    create: async (req: CustomPictureProfileRequest, res: Response): Promise<void> => {
        try {
            const { user } = req
            const { id } = req.query

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

                            await prisma.profile_pictures.create({
                                data: {
                                    name,
                                    size,
                                    id,
                                    url: url === '' ? `${config.DEV_URL}/files/${id}` : url,
                                    user_id: user.id,
                                    created_at: nowLocalDate(),
                                    updated_at: nowLocalDate()
                                }
                            })
                            
                            res.status(201).json({ message: 'profile picture created'})

                            if (process.env.STORAGE_TYPE === 's3') {
                                return s3
                                    .deleteObject({
                                        Bucket: process.env.BUCKET_NAME,
                                        Key: id
                                    })
                                    .promise()
                                    .then(response => {
                                        console.log(response.status)
                                    })
                                    .catch(response => {
                                        console.log(response.status)
                                    })
                            } else {
                                return promisify(fs.unlink)(
                                    path.resolve(__dirname, '..', '..', 'tmp', 'uploads', existingImage.id)
                                )
                            }
                        } else {
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
                        }
                    } else {
                        res.status(404).json({ message: 'user not found' })
                    }
                } else {
                    res.status(403).json({ message: 'no access' })
                }
            } else {
                res.status(412).json({ message: 'missing id'})
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    list: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const pictures = await prisma.profile_pictures.findMany()

            res.status(200).json(pictures)
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    data: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { id } = req.query

            if (id) {
                const profilePicture = await prisma.profile_pictures.findUnique({
                    where: { id }
                })

                if (profilePicture) {
                    res.status(200).json(profilePicture)
                } else {
                    res.status(404).json({ message: 'profile picture not found' })
                }
            } else {
                res.status(412).json({ message: 'missing id'})
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    delete: async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const { id } = req.query


        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}

export {
    profilePictureController
}