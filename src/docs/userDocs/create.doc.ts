const create = {
    '/user/create': {
        post: {
            tags: [
                'User'
            ],
            summary: 'User create',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string'
                                },
                                phone: {
                                    type: 'string'
                                },
                                email: {
                                    type: 'string'
                                },
                                password: {
                                    type: 'string'
                                }
                            },
                            example: {
                                name: 'joao',
                                phone: '99999999999',
                                email: 'joao@provider.com',
                                password: '123456'
                            }
                        }
                    }
                }
            },
            responses: {
                '201': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'user created'
                                }
                            }
                        }
                    }
                },
                '400': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'e-mail already exists'
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

export { create }