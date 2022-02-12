const auth = {
    '/user/auth': {
        post: {
            tags: [
                'User'
            ],
            summary: 'Auth user',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                email: {
                                    type: 'string'
                                },
                                password: {
                                    type: 'password'
                                }
                            },
                            example: {
                                email: 'joao@provider.com',
                                password: '123456'
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