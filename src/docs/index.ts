import { version, description } from '../../package.json'
import { notificationDocs } from './notificationDocs'
import { profilePictureDocs } from './profilePictureDocs'
import { transactionDocs } from './transactionDocs'
import { userDocs } from './userDocs'


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
        ...userDocs,
        ...profilePictureDocs,
        ...transactionDocs,
        ...notificationDocs
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