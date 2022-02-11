type CustomRequest = Request & JwtPayload & {
    user: {
        id: string
        access_level: string
    } | undefined
}

type MulterConfig = MulterConfig & Options & {
    dest: string
    storage: multer.StorageEngine
    limits: {
        fileSize: number
    }
    fileFilter: ( req: Request, file: Express.Multer.File, cb: FileFilterCallback) => void
}

type CustomPictureProfileRequest = CustomRequest & {
    file: {
        originalname: string
        size: number
        key: string
        location: string
    }
}

export {
    CustomRequest,
    MulterConfig,
    CustomPictureProfileRequest
}