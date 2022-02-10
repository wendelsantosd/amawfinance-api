type CustomRequest = Request & JwtPayload & {
    user: {
        id: string
        access_level: string
    } | undefined
}

export {
    CustomRequest
}