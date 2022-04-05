const listByUserYearCategory = {
    '/transaction/list-by-user-year-category': {
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
                                        home: 200,
                                        education: 200,
                                        food: 200,
                                        health: 200,
                                        transport: 200,
                                        leisure: 200,
                                        clothing: 200
                                    },
                                    sumFevT: {
                                        home: 200,
                                        education: 200,
                                        food: 200,
                                        health: 200,
                                        transport: 200,
                                        leisure: 200,
                                        clothing: 200
                                    },
                                    sumMarT: {
                                        home: 200,
                                        education: 200,
                                        food: 200,
                                        health: 200,
                                        transport: 200,
                                        leisure: 200,
                                        clothing: 200
                                    },
                                    sumAprT: {
                                        home: 2232,
                                        education: 3200200,
                                        food: 200,
                                        health: 3200200,
                                        transport: 200,
                                        leisure: 35,
                                        clothing: 200
                                    },
                                    sumMayT: {
                                        home: 200,
                                        education: 200,
                                        food: 200,
                                        health: 200,
                                        transport: 200,
                                        leisure: 200,
                                        clothing: 33
                                    },
                                    sumJunT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumJulT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumAugT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumSepT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumOctT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumNovT: {
                                        home: 33,
                                        education: 33,
                                        food: 33,
                                        health: 33,
                                        transport: 33,
                                        leisure: 33,
                                        clothing: 33
                                    },
                                    sumDecT: {
                                        home: 33,
                                        education: 33,
                                        food: 212,
                                        health: 212,
                                        transport: 212,
                                        leisure: 212,
                                        clothing: 212
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

export { listByUserYearCategory }