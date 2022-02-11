import { createTransport } from 'nodemailer'
import smtTransport from 'nodemailer-smtp-transport'

import { config } from '../config'

const sendEmail = async (to: string, token: string, type: string): Promise<void> => {
    const { user, pass } = config.NODEMAILER
    let emailOptions = {}
    let url = ''
    let message =''

    if (type === 'confirmEmail') {
        url = `http://localhost:3333/user/confirm-email/${token}`
        message = 'confirmar seu e-mail'
    } else if (type === 'recoverPassword') {
        url = `http://localhost:3000/modify-password/${token}`
        message = 'confirmar sua senha'
    } else if (type === 'modifyEmail') {
        url = `http://localhost:3333/user/alter-email/${to}/${token}`
        message = 'confirmar seu e-mail'
    }

    const transporter = createTransport(
        smtTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user,
                pass
            }
        })
    )

    if (type === 'welcome') {
        emailOptions = {
            from: user,
            to,
            subject: message,
            html: '<p>Seja bem vindo a plataforma acadêmica Amaw.<p>'
        }
    } else {
        emailOptions = {
            from: user,
            to,
            subject: 'Seja bem vindo',
            html: `Por favor, clique no link para ${message}:<a href=${url}>${url}</a>`
        }
    }

    

    transporter.sendMail(emailOptions, (err, payload) => {
        if (err) {
            console.log(err)
        } else {
            console.log(payload.response)
        }
    })
}

export { sendEmail }