import request from 'supertest'

import { app } from '../../index'
import { nowLocalDate } from '../../provider/nowLocalDate'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0ZmQxNmE4LTlmOTktNDhhMS04ZDA3LWVmZjdlMzBlMzQxNyIsImFjY2Vzc19sZXZlbCI6ImFkbWluIiwiaWF0IjoxNjQ0NTEzNTYxLCJleHAiOjE2NDUzNzc1NjF9._QT-mYTZZpKND-Chh3xgjdN5O3A9EwLUj5liSDqKMns'
const id = '6150747b-46b3-41d5-a596-6bc0658b913a'


//TO DO
// describe('Create a profile picture', () => {
//     const file = {
//         name: 'picture-example',
//         size: 123,
//         id: 'picture-example-id',
//         url: 'https://www.example.com/',
//         user_id: id,
//         created_at: nowLocalDate(),
//         updated_at: nowLocalDate()
//     }

//     it('should be able to create a user', async () => {
//         const response = await request(app)
//             .post(`/user/profile-picture/create?id=${id}`)
//             .set('Authorization', `Bearer ${token}`)
//             .send(file)
        
//         expect(response.status).toBe(201)
//     })
// })