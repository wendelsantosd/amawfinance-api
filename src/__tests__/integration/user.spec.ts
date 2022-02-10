import request from 'supertest'

import { app } from '../../index'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZmQxNmE4LTlmOTktNDhhMS04ZDA3LWVmZjdlMzBlMzQxNyIsImFjY2Vzc19sZXZlbCI6ImFkbWluIiwiaWF0IjoxNjQ0NTEzNTYxLCJleHAiOjE2NDUzNzc1NjF9._QT-mYTZZpKND-Chh3xgjdN5O3A9EwLUj5liSDqKMns'
const tokenConfirmEmail = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxZjhmMTZmLTE0YWMtNDRlOC1hOGM0LWIwYzA0YzcyNjBiOCIsImlhdCI6MTY0NDUyMTE1NywiZXhwIjoxNjQ0NjA3NTU3fQ.u5dFik1PFbsOTqIuiJoWUNmk49C9MDL75f1bWJJ1obg'
const id = '41f8f16f-14ac-44e8-a8c4-b0c04c7260b8'

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
                name: 'Fernando Silva',
                phone: '9187453677',
                email: 'fernandosilva@provider.com',
                password: 'fernando'
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

// describe('Confirm email user', () => {
//     it('should be able to confirm email  user', async () => {
//         const response = await request(app)
//             .get(`/user/confirm-email/${tokenConfirmEmail}`)

//         expect(response.status).toBe(200)
//     })
// })

describe('Delete a user', () => {
    it('should be able to delete a specify user', async () => {
        const response = await request(app)
            .delete(`/user/delete?id=${id}`)
            .set('Authorization', `Bearer ${token}`)

        expect(response.status).toBe(200)
    })
})