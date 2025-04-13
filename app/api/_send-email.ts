import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { nombre, email, asunto, mensaje } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'nicogomezmorgado86@gmail.com',
            subject: `[CONTACTO] ${asunto}`,
            html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        `,
        })

        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al enviar el correo' })
    }
}