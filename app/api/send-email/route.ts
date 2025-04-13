// app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const data = await request.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'nicogomezmorgado86@gmail.com',
            subject: `[CONTACTO] ${data.asunto}`,
            html: `
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.mensaje}</p>
        `
        })

        return NextResponse.json({
            success: true,
            message: "Mensaje enviado correctamente" // <- Añade mensaje
        })

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                success: false,
                error: 'Error al enviar el correo'
            },
            { status: 500 }
        )
    }
}