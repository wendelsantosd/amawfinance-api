import request from 'supertest'

import { app } from '../../index'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZmQxNmE4LTlmOTktNDhhMS04ZDA3LWVmZjdlMzBlMzQxNyIsImFjY2Vzc19sZXZlbCI6ImFkbWluIiwiaWF0IjoxNjQ0NTEzNTYxLCJleHAiOjE2NDUzNzc1NjF9._QT-mYTZZpKND-Chh3xgjdN5O3A9EwLUj5liSDqKMns'
const id = 'c5ef7a95-f27b-47c4-8d63-dd04ff06a609'

describe('Authentication', () => {
    it('should be able to do login', async () => {
        const response = await request(app)
            .post('/user/auth')
            .send({
                email: 'admin@provider.com',
                password: 'admin'
            })
        
        expect(response.status).toBe(200)
    })
})

describe('Create User', () => {
    it('should be able to create a user', async () => {
        const response = await request(app)
            .post('/user/create')
            .send({
                name: 'Fernando Silva',
                phone: '9187453677',
                email: 'fernandosilva@provider.com',
                password: 'fernando'
            })
        
        expect(response.status).toBe(201)
    })

    it('should not be able to create a user with the same email', async () => {
        const response = await request(app)
            .post('/user/create')
            .send({
                name: 'Wendel Santos',
                phone: '91984379366',
                email: 'wendelwcsantos@gmail.com',
                password: 'wendel'
            })
        
        expect(response.status).toBe(500)
    })
})

describe('Get a user', () => {
    it('should be able to get a specify user', async () => {
        const response = await request(app)
            .get(`/user/data?id=${id}`)
            .set('Authorization', `Bearer ${token}`)

        expect(response.status).toBe(200)
    })
})

describe('Update a user', () => {
    it('should be able to update a specify user', async () => {
        const response = await request(app)
            .put(`/user/update?id=${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Name updated',
                phone: '98765473899'
            })

        expect(response.status).toBe(200)
    })
})