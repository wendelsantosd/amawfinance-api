const listByUserMonthYear = {
    '/transaction/list-by-user-month-year': {
        get: {
            tags: [
                'Transaction'
            ],
            summary: 'List transactions by user, month and year',
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
                    name: 'month',
                    required: 'true',
                    type: 'uuid',
                    description: 'id'
                },
                {
                    in: 'query',
                    name: 'year',
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
                                example: [
                                    {
                                        id: '5caa9151-691e-4a97-9bac-94264d6d8ef3',
                                        description: 'Aluguel',
                                        type: 'expense',
                                        amount: 400
                                    },

                                    '...'
                                ]
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

export { listByUserMonthYear }