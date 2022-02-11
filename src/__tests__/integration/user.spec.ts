import request from 'supertest'

import { app } from '../../index'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZmQxNmE4LTlmOTktNDhhMS04ZDA3LWVmZjdlMzBlMzQxNyIsImFjY2Vzc19sZXZlbCI6ImFkbWluIiwiaWF0IjoxNjQ0NTEzNTYxLCJleHAiOjE2NDUzNzc1NjF9._QT-mYTZZpKND-Chh3xgjdN5O3A9EwLUj5liSDqKMns'
const tokenConfirmEmail = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxZjhmMTZmLTE0YWMtNDRlOC1hOGM0LWIwYzA0YzcyNjBiOCIsImlhdCI6MTY0NDUyMTE1NywiZXhwIjoxNjQ0NjA3NTU3fQ.u5dFik1PFbsOTqIuiJoWUNmk49C9MDL75f1bWJJ1obg'
const tokenModifyPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTA3NDdiLTQ2YjMtNDFkNS1hNTk2LTZiYzA2NThiOTEzYSIsImlhdCI6MTY0NDUyNTAzMywiZXhwIjoxNjQ0NjExNDMzfQ.GgtslVhMqMNznQjLztJLxSZNk2ZsdElweAaZnsngNfs'
const id = '6150747b-46b3-41d5-a596-6bc0658b913a'

const email = 'wendelwcsantos@gmail.com'
const tokenAlterEmail = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTA3NDdiLTQ2YjMtNDFkNS1hNTk2LTZiYzA2NThiOTEzYSIsImlhdCI6MTY0NDU4MjE4MiwiZXhwIjoxNjQ0NjY4NTgyfQ.kt5dDEK5OhqT96FTKJ2eEAtGPfyB33M9H25k98rOCMc'

// describe('Authentication', () => {
//     it('should be able to do login', async () => {
//         const response = await request(app)
//             .post('/user/auth')
//             .send({
//                 email: 'admin@provider.com',
//                 password: 'admin'
//             })
        
//         expect(response.status).toBe(200)
//     })
// })

// describe('Create User', () => {
//     it('should be able to create a user', async () => {
//         const response = await request(app)
//             .post('/user/create')
//             .send({
//                 name: 'Fernando Silva',
//                 phone: '9187453677',
//                 email: 'fernandosilva@provider.com',
//                 password: 'fernando'
//             })
        
//         expect(response.status).toBe(201)
//     })

//     it('should not be able to create a user with the same email', async () => {
//         const response = await request(app)
//             .post('/user/create')
//             .send({
//                 name: 'Fernando Silva',
//                 phone: '9187453677',
//                 email: 'fernandosilva@provider.com',
//                 password: 'fernando'
//             })
        
//         expect(response.status).toBe(500)
//     })
// })

// describe('Get a user', () => {
//     it('should be able to get a specify user', async () => {
//         const response = await request(app)
//             .get(`/user/data?id=${id}`)
//             .set('Authorization', `Bearer ${token}`)

//         expect(response.status).toBe(200)
//     })
// })

// describe('Update a user', () => {
//     it('should be able to update a specify user', async () => {
//         const response = await request(app)
//             .put(`/user/update?id=${id}`)
//             .set('Authorization', `Bearer ${token}`)
//             .send({
//                 name: 'Name updated',
//                 phone: '98765473899'
//             })

//         expect(response.status).toBe(200)
//     })
// })

// describe('Confirm email user', () => {
//     it('should be able to confirm email  user', async () => {
//         const response = await request(app)
//             .get(`/user/confirm-email/${tokenConfirmEmail}`)

//         expect(response.status).toBe(200)
//     })
// })

// describe('Delete a user', () => {
//     it('should be able to delete a specify user', async () => {
//         const response = await request(app)
//             .delete(`/user/delete?id=${id}`)
//             .set('Authorization', `Bearer ${token}`)

//         expect(response.status).toBe(200)
//     })
// })

// describe('Recover password user', () => {
//     it('should be able sent a email for recover password', async () => {
//         const response = await request(app)
//             .get('/user/recover-password?email=admin@provider.com')

//         expect(response.status).toBe(200)
//     })
// })

// describe('Modify password by recover', () => {
//     it('should be able modify password', async () => {
//         const response = await request(app)
//             .post(`/user/modify-password-by-recover/${tokenModifyPassword}`)
//             .send({
//                 password: '123456789'
//             })

//         expect(response.status).toBe(200)
//     })
// })

// describe('Modify password', () => {
//     it('should be able to modify password', async () => {
//         const response = await request(app)
//             .put(`/user/update?id=${id}`)
//             .set('Authorization', `Bearer ${token}`)
//             .send({
//                 password: '846745t'
//             })

//         expect(response.status).toBe(200)
//     })
// })

// describe('Modify Email', () => {
//     it('should be able sent a email for confirm email', async () => {
//         const response = await request(app)
//             .get(`/user/recover-password?email=admin@provider.com&id=${id}`)

//         expect(response.status).toBe(200)
//     })
// })

// describe('Alter email', () => {
//     it('should be able alter email', async () => {
//         const response = await request(app)
//             .get(`/user/alter-email/${email}/${tokenAlterEmail}`)

//         expect(response.status).toBe(200)
//     })
// })