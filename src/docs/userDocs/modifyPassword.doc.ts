const modifyPassword = {
    '/user/modify-password': {
        patch: {
            tags: [
                'User'
            ],
            summary: 'Modify password  user',
            security: [
                {
                    bearerAuth: []
                }
            ],
            parameters: [
                {
                    in: 'query',
                    name: 'id',
                    required: 'true',
                    type: 'uuid',
                    description: 'id'
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
                                password: '99999999999'
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
                                    message: 'target user not found'
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
                                    message: 'unauthorized'
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
                                    message: 'missing id'
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

export { modifyPassword }