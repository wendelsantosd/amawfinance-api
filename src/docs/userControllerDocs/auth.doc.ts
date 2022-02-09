const auth = {
    '/user/auth': {
        get: {
            tags: [
                'User'
            ],
            summary: 'User auth',
            parameters: [
                {
                    in: 'query',
                    name: 'email',
                    required: 'true',
                    type: 'string',
                    description: 'email'
                },
                {
                    in: 'query',
                    name: 'password',
                    required: 'true',
                    type: 'string',
                    format: 'password',
                    description: 'password'
                }
            ],
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
                '404': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'email not found'
                                }
                            }
                        }
                    }
                },
                '401': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'e-mail or password incorrect'
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

export { auth }