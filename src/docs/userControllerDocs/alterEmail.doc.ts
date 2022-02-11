const alterEmail = {
    '/user/alter-email/:email/:token': {
        get: {
            tags: [
                'User'
            ],
            summary: 'Alter email user',
            parameters: [
                {
                    in: 'path',
                    name: 'email',
                    required: 'true',
                    type: 'string'
                },
                {
                    in: 'path',
                    name: 'token',
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
                                    message: 'email altered'
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

export { alterEmail }