import { version, description } from '../../package.json'
import { UserControllerDocs } from './userControllerDocs'


const swagger = {
    openapi: '3.0.0',
    info: {
        title: 'Amaw Finance API',
        description,
        version,
        contact: {
            email: 'wendelwcsantos@gmail.com'
        }
    },
    paths: {
        ...UserControllerDocs
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    }
}

export { swagger }