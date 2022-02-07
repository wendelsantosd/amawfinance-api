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