const data = {
    '/transaction/data': {
        get: {
            tags: [
                'Transaction'
            ],
            summary: 'Get a transaction',
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
                },
                {
                    in: 'query',
                    name: 'userId',
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
                                    description: {
                                        type: 'string'  
                                    },
                                    amount: {
                                        type: 'number'
                                    },
                                    type: {
                                        type: 'string'
                                    },
                                    date: {
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
                                    id: '5caa9151-691e-4a97-9bac-94264d6d8ef3',
                                    description: 'Aluguel',
                                    amount: 400,
                                    type: 'expense',
                                    user_id: 'f12344f4-77ee-4a53-a73f-9913cf0abe7c',
                                    created_at: '2021-10-18T23:35:21.117Z',
                                    updated_at: '2021-10-18T23:35:21.117Z'
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
                                    message: 'transaction not found'
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

export { data }