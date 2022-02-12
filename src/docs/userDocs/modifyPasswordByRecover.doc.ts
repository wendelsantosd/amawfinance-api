const modifyPasswordByRecover = {
    '/user/modify-password-by-recover/:token': {
        post: {
            tags: [
                'User'
            ],
            summary: 'Modify password by recover user',
            parameters: [
                {
                    in: 'path',
                    name: 'token',
                    required: 'true',
                    type: 'string'
                }
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                password: {
                                    type: 'string'
                                }
                            },
                            example: {
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
                                type: 'string',
                                example: {
                                    message: 'password altered'
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
                                    message: 'user not found'
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

export { modifyPasswordByRecover }