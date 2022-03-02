const listByUserYear = {
    '/transaction/list-by-user-year': {
        get: {
            tags: [
                'Transaction'
            ],
            summary: 'List transactions by user and year',
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
                                    sumJanT: {
                                        type: 'object'  
                                    },
                                    sumFevT: {
                                        type: 'object'  
                                    },
                                    sumMarT: {
                                        type: 'object'  
                                    },
                                    sumAprT: {
                                        type: 'object'  
                                    },
                                    sumMayT: {
                                        type: 'object'  
                                    },
                                    sumJunT: {
                                        type: 'object'  
                                    },
                                    sumJulT: {
                                        type: 'object'  
                                    },
                                    sumAugT: {
                                        type: 'object'  
                                    },
                                    sumSepT: {
                                        type: 'object'  
                                    },
                                    sumOctT: {
                                        type: 'object'  
                                    },
                                    sumNovT: {
                                        type: 'object'  
                                    },
                                    sumDecT: {
                                        type: 'object'  
                                    }
                                },
                                example: {
                                    sumJanT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumFevT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumMarT: {
                                        income: 6300,
                                        expense: 1000,
                                        total: 5300
                                    },
                                    sumAprT: {
                                        income: 0,
                                        expense: 1000,
                                        total: -1000
                                    },
                                    sumMayT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumJunT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumJulT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumAugT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumSepT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumOctT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumNovT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    },
                                    sumDecT: {
                                        income: 0,
                                        expense: 0,
                                        total: 0
                                    }
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

export { listByUserYear }