import { NextFunction, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { config } from '../config'
import { CustomRequest } from '../types'

const verifyToken = (
    req: CustomRequest,
    res: Response,
    next: NextFunction
): void => {
    const token: string | undefined = req.headers.authorization?.split(' ')[1]

    if (token) {
        const { secret } = config.JWT

        verify(token, secret, (err, payload) => {
            if (err) {
                res.status(401).json({ message: err.message })
            }

            req.user = payload
            next()
        })
    } else {
        res.status(401).json({ message: 'missing token' })
    }
}

export { verifyToken }