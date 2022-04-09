const listByUserMonthYear = {
    '/notification/list-by-user-month-year': {
        get: {
            tags: [
                'Notification'
            ],
            summary: 'List notifications by user, month and year',
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
                                    id: {
                                        type: 'string'
                                    },
                                    message: {
                                        type: 'string'  
                                    },
                                    month: {
                                        type: 'number'
                                    },
                                    year: {
                                        type: 'number'
                                    },
                                    user_id: {
                                        type: 'string'
                                    },
                                    percentage: {
                                        type: 'number'
                                    },
                                    viewed: {
                                        type: 'boolean'
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
                                        id: '119c4be1-f4c5-448d-aac2-2d4a4718f8f9',
                                        percentage: 93.73,
                                        message: 'Você gastou 93.73% da sua receita total',
                                        viewed: true,
                                        month: 3,
                                        year: 2022,
                                        user_id: '74c8c0eb-5b0a-41dc-ba27-56f25269c243',
                                        created_at: '2022-04-05T13:23:24.745Z',
                                        updated_at: '2022-04-05T13:23:24.745Z'
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