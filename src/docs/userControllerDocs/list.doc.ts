const list = {
    '/user/list': {
        get: {
            tags: [
                'User'
            ],
            summary: 'User list',
            security: [
                {
                    bearerAuth: []
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
                                    }
                                },
                                example: [

                                    {
                                        id: '2557fa48-484b-4ca1-944d-0a2b66e3845e',
                                        name: 'joao',
                                        access_level: 'admin',
                                        phone: '99999999999',
                                        email: 'joao@provider.com'
                                    },

                                    {
                                        id: '2siofa48-482b-4ca1-944d-0a2b6oq9845e',
                                        name: 'joao',
                                        access_level: 'admin',
                                        phone: '99999999999',
                                        email: 'joao@provider.com'
                                    }
                                ]
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

export { list }