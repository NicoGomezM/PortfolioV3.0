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
            html: 
                `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #4CAF50; text-align: center;">Nuevo Mensaje de Contacto</h2>
                    <p><strong>Nombre:</strong> ${data.nombre}</p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #1E90FF;">${data.email}</a></p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                        <p>${data.mensaje}</p>
                    </div>
                </div>
                `,
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