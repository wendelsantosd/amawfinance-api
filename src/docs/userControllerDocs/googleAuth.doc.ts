const googleAuth = {
    '/user/google-auth': {
        post: {
            tags: [
                'User'
            ],
            summary: 'Google auth user',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                idToken: {
                                    type: 'string'
                                },
                                name: {
                                    type: 'password'
                                }
                            },
                            example: {
                                idToken: '110169484474386276334',
                                name: 'Fernando Pereira'
                            }
                        }
                    }
                }
            },
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    token: {
                                        type: 'string'
                                    }
                                },
                                example: {
                                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0ODkwIiwibmFtZSI6IkpvZ2ZnZmhuIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.GARIyo2w6ZcuniX26kpmMgCmBTp5TX_6tjm2tFMkbRU'
                                }
                            }
                        }
                    }
                },
                '412': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'missing arguments'
                                }
                            }
                        }
                    }
                },
                '500': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: '<error message>'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

export { googleAuth }