const config : {
    HTTP_SERVER_PORT: number
    JWT: {
        secret: string
        expTime: string
    }
     NODEMAILER: {
        user: string
        pass: string
    }
    REDIRECT: {
        loginUrl: string
    }
    DEV_URL: string
} = {
    HTTP_SERVER_PORT: 3333,
    JWT: {
        secret: '7c9a123b4e7fd5b3c0cb9d647da87e70',
        expTime: '10d'
    },
    NODEMAILER: {
        user: 'amawacademic@gmail.com',
        pass: '@e3b0c44298%fc1c149afbf4c89&&96fb92427ae41e@@4649b934ca495991b7852b855$'
    },
    REDIRECT: {
        loginUrl: 'http://localhost:3000/'
    },
    DEV_URL: 'http://localhost:3333'
}

export { config }