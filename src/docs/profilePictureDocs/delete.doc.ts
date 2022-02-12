const _delete = {
    '/profile-picture/delete': {
        delete: {
            tags: [
                'Profile Picture'
            ],
            summary: 'Profile picture delete',
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
            responses: {
                '200': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'profile picture deleted'
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
                                    message: 'profile picture not found'
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

export { _delete }