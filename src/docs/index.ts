import { version, description } from '../../package.json'
import { ProfilePictureDocs } from './ProfilePictureDocs'
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
        ...UserControllerDocs,
        ...ProfilePictureDocs
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