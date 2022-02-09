import request from 'supertest'

import { app } from '../../index'

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
                name: 'Wendel Santos',
                phone: '91984379366',
                email: 'wendelwcsantos@gmail.com',
                password: 'wendel'
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