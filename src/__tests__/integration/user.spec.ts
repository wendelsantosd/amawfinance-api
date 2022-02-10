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

describe('Get a user', () => {
    it('should be able to get a specify user', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZmQxNmE4LTlmOTktNDhhMS04ZDA3LWVmZjdlMzBlMzQxNyIsImlhdCI6MTY0NDUwNjU1NiwiZXhwIjoxNjQ1MzcwNTU2fQ.qu8fJBBp8CrAHter2LL59WvGtD14m0NBCZyulMb1WIU'
        const id = '34fd16a8-9f99-48a1-8d07-eff7e30e3417'

        const response = await request(app)
            .get(`/user/data?id=${id}`)
            .set('Authorization', `Bearer ${token}`)

        expect(response.status).toBe(200)
    })
})