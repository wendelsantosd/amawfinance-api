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
        pass: 'financeplatform$'
    },
    REDIRECT: {
        loginUrl: 'http://localhost:3000/'
    },
    DEV_URL: 'http://localhost:3333'
}

export { config }