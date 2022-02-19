import nodemailer, { SendMailOptions } from 'nodemailer'

import { errLogger } from './logger'

const createMailer = () =>
        nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_GMAIL_APP_SECRET,
            },
        }),
    sendEmailPromise = (mailData: SendMailOptions): Promise<void> =>
        new Promise((res, rej) => {
            try {
                createMailer().sendMail(
                    { ...mailData, from: process.env.NODE_MAILER_EMAIL },
                    (err) => {
                        if (!err) return res()

                        throw err
                    }
                )
            } catch (err) {
                errLogger(`sendEmailPromise: ${err}`)
                rej(err)
            }
        })

export default sendEmailPromise
