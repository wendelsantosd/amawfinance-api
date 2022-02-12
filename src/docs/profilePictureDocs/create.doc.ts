const create = {
    '/profile-picture/create': {
        post: {
            tags: [
                'Profile Picture'
            ],
            summary: 'Create profile picture',
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
                    image: {
                        schema: {
                            type: 'file'
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
                                    message: 'profile picture created'
                                }
                            }
                        }
                    }
                },
                '403': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'could not access'
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
                                    message: '<<error message>>'
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