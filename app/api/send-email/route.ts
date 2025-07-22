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
        // Enviar correo de notificación
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
                    <p><strong>Asunto:</strong> ${data.asunto}</p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                        <p>${data.mensaje}</p>
                    </div>
                </div>
                `,
        })

        // Enviar respuesta automática al remitente
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: 'Gracias por contactarme - Nicolás Gómez Morgado',
            html: 
                `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #4CAF50; text-align: center;">¡Gracias por contactarme!</h2>
                    <p>Hola <strong>${data.nombre}</strong>,</p>
                    <p>He recibido tu mensaje y te responderé lo antes posible. Aquí tienes un resumen de lo que me enviaste:</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee; margin: 20px 0;">
                        <p><strong>Asunto:</strong> ${data.asunto}</p>
                        <p><strong>Tu mensaje:</strong></p>
                        <p style="font-style: italic;">"${data.mensaje}"</p>
                    </div>
                    
                    <p>Mientras tanto, puedes:</p>
                    <ul>
                        <li>Revisar mis proyectos en mi portfolio</li> 
                        <li>Conectar conmigo en LinkedIn</li>
                        <li>Ver mi trabajo en GitHub</li>
                    </ul>
                    
                    <p>¡Saludos!</p>
                    <p><strong>Nicolás Gómez Morgado</strong><br>
                    Desarrollador Junior Full Stack</p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #666;">Este es un mensaje automático. Por favor, no respondas a este correo.</p>
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