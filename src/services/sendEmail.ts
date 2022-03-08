import { createTransport } from 'nodemailer'
import smtTransport from 'nodemailer-smtp-transport'

import { config } from '../config'

const sendEmail = async (to: string, token: string, type: string): Promise<void> => {
    const { user, pass } = config.NODEMAILER
    let emailOptions = {}
    let url = ''
    const from = 'Amaw Finance'

    if (type === 'confirmEmail') {
        url = `${process.env.URL_API}/user/confirm-email/${token}`
    } else if (type === 'recoverPassword') {
        url = `${process.env.URL_WEB}/${token}`
    } else if (type === 'modifyEmail') {
        url = `${process.env.URL_API}/user/alter-email/${to}/${token}`
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
            from,
            to,
            subject: 'Seja bem vindo a Amaw Finance',
            html: `
                    <body>
                        <div>
                            <p>Seja bem vindo a plataforma Amaw Finance.</p>
                            <p>Tenha total controle das suas finanças.</p>
                        </div>
                    </body>
                `
        }
    } else if (type === 'confirmEmail'){
        emailOptions = {
            from,
            to,
            subject: 'Seja bem vindo a Amaw Finance',
            html: `
                    <body>
                        <div>
                            <p>Seja bem vindo a plataforma Amaw Finance.</p>
                            <p>Tenha total controle das suas finanças.</p>
                            <p>Agora você só precisa confirmar seu e-mail.</p> 
                            <a href=${url}>Clique aqui.</a>
                        </div>
                    </body>
                `
        }
    } else if (type === 'modifyEmail'){
        emailOptions = {
            from,
            to,
            subject: 'Solitação de Alteração de E-mail',
            html: `
                    <body>
                        <div>
                            <p>Você precisa confirmar este e-mail para alterar o e-mail atual.</p> 
                            <a href=${url}>Clique aqui.</a>
                        </div>
                    </body>
                `
        }
    } else if (type === 'recoverPassword'){
        emailOptions = {
            from,
            to,
            subject: 'Solitação de Recuperação de Senha',
            html: `
                    <body>
                        <div>
                            <p>Modifique sua senha.</p> 
                            <a href=${url}>Clique aqui.</a>
                        </div>
                    </body>
                `
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