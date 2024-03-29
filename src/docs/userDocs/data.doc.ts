const data = {
    '/user/data': {
        get: {
            tags: [
                'User'
            ],
            summary: 'Data user',
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
                                type: 'object',
                                properties: {
                                    id: {
                                        type: 'string'  
                                    },
                                    name: {
                                        type: 'string'
                                    },
                                    access_level: {
                                        type: 'string'
                                    },
                                    phone: {
                                        type: 'string'
                                    },
                                    email: {
                                        type: 'string'
                                    },
                                    picture_url: {
                                        type: 'string'
                                    }
                                },
                                example: {
                                    id: '2557fa48-484b-4ca1-944d-0a2b66e3845e',
                                    name: 'joao',
                                    access_level: 'admin',
                                    phone: '99999999999',
                                    email: 'joao@provider.com',
                                    picture_url: 'https://images/files/4f3362832e9b895ea80f4322ffb917b8-ME.JPG'
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

export { data }