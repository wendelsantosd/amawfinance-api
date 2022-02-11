import aws from 'aws-sdk'
import crypto from 'crypto'
import { config } from 'dotenv'
import { Request } from 'express'
import { FileFilterCallback, diskStorage } from 'multer'
import multerS3 from 'multer-s3'
import path from 'path'
import { MulterConfig } from 'types'

config()

const storageTypes = {
    local: diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file: any, cb: any) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                file.key = `${hash.toString('hex')}-${file.originalname}`

                cb(null, file.key)
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'amaw-files',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                const fileName = `${hash.toString('hex')}-${file.originalname}`

                cb(null, fileName)
            })
        }
    })
}

const multerConfig: MulterConfig = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes['local'],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ]

        const mimetypes = file.mimetype

        if (allowedMimes.includes(mimetypes)) {
            cb(null, true)
        } else {
            cb(new Error('invalid file type'))
        }
    }
    
}

export { multerConfig }