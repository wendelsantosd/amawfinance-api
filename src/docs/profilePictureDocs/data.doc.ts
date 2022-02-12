const data = {
    '/profile-picture/data': {
        get: {
            tags: [
                'Profile Picture'
            ],
            summary: 'Get a profile picture',
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
                                    size: {
                                        type: 'number'
                                    },
                                    url: {
                                        type: 'string'
                                    },
                                    user_id: {
                                        type: 'string'
                                    },
                                    created_at: {
                                        type: 'date'
                                    },
                                    updated_at: {
                                        type: 'date'
                                    }
                                },
                                example: {
                                    id: '86eef6d1cf4e9e19e7eb0ccd2135eb38-3x4Wendel.png',
                                    name: '3x4Wendel.png',
                                    size: 928472,
                                    url: 'https://amaw-files.s3.amazonaws.com/86eef6d1cf4e9e19e7eb0ccd2135eb38-3x4Wendel.png',
                                    user_id: 'f12344f4-77ee-4a53-a73f-9913cf0abe7c',
                                    created_at: '2021-10-18T23:35:21.117Z',
                                    updated_at: '2021-10-18T23:35:21.117Z'
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

export { data }