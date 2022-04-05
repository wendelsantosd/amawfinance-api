const create = {
    '/notification/create': {
        post: {
            tags: [
                'Notification'
            ],
            summary: 'Create notification',
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
                '201': {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string',
                                example: {
                                    message: 'notification created'
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

export { create }