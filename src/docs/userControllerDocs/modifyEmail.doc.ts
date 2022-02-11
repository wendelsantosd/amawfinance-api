const recoverPassword = {
    '/user/modify-email': {
        get: {
            tags: [
                'User'
            ],
            summary: 'Modify email user',
            parameters: [
                {
                    in: 'query',
                    name: 'email',
                    required: 'true',
                    type: 'string'
                },
                {
                    in: 'query',
                    name: 'id',
                    required: 'true',
                    type: 'string'
                }
            ],
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'email sent'
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
                                    message: 'missing token'
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
                                    message: 'email already exists'
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

export { recoverPassword }