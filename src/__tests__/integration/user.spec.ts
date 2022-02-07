import request from 'supertest'

import { app } from '../../index'

describe('Authentication', () => {
    it('should be able to create a new user', async () => {
        const response = await request(app)
            .post('/user/auth')
            .send({
                name: 'User Test',
                access_level: 'client',
                phone: '91987463522',
                email: 'usertest@provider.com',
                password: 'user'
            })

        expect(response.status).toBe(201)
    })
})