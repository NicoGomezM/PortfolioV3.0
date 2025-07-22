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
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #ff7eb3 0%, #ff758c 100%); padding: 2px; border-radius: 12px;">
                    <div style="background: white; padding: 30px; border-radius: 10px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #ff6b35; margin: 0; font-size: 28px; font-weight: 600;">📬 Nuevo Mensaje de Contacto</h1>
                            <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #ff6b35, #f7931e); margin: 15px auto; border-radius: 2px;"></div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                            <div style="background: white; padding: 20px; border-radius: 8px;">
                                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Información del contacto:</h3>
                                
                                <div style="display: grid; gap: 15px;">
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #ff6b35;">
                                        <p style="margin: 0; color: #666; font-size: 14px; font-weight: 600;">NOMBRE</p>
                                        <p style="margin: 5px 0 0 0; color: #333; font-size: 16px; font-weight: 500;">${data.nombre}</p>
                                    </div>
                                    
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #4CAF50;">
                                        <p style="margin: 0; color: #666; font-size: 14px; font-weight: 600;">EMAIL</p>
                                        <p style="margin: 5px 0 0 0;">
                                            <a href="mailto:${data.email}" style="color: #1E90FF; text-decoration: none; font-size: 16px; font-weight: 500;">${data.email}</a>
                                        </p>
                                    </div>
                                    
                                    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #9c27b0;">
                                        <p style="margin: 0; color: #666; font-size: 14px; font-weight: 600;">ASUNTO</p>
                                        <p style="margin: 5px 0 0 0; color: #333; font-size: 16px; font-weight: 500;">${data.asunto}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border: 2px solid #e9ecef;">
                            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">💬 Mensaje:</h3>
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #17a2b8; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                <p style="margin: 0; color: #555; font-size: 16px; line-height: 1.6;">${data.mensaje}</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white;">
                            <p style="margin: 0; font-size: 14px; opacity: 0.9;">¡Recuerda responder pronto! 🚀</p>
                        </div>
                    </div>
                </div>
                `,
        })

        // Enviar respuesta automática al remitente
        await transporter.sendMail({
            from: `"Respuesta Automática - Nicolás Gómez" <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: 'Gracias por contactarme - Nicolás Gómez Morgado',
            html: 
                `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 12px;">
                    <div style="background: white; padding: 30px; border-radius: 10px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #4CAF50; margin: 0; font-size: 28px; font-weight: 600;">¡Gracias por contactarme!</h1>
                            <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #4CAF50, #45a049); margin: 15px auto; border-radius: 2px;"></div>
                        </div>
                        
                        <p style="font-size: 16px; margin-bottom: 20px;">Hola <strong style="color: #4CAF50;">${data.nombre}</strong>,</p>
                        
                        <p style="font-size: 16px; margin-bottom: 25px;">He recibido tu mensaje y te responderé lo antes posible. Aquí tienes un resumen de lo que me enviaste:</p>
                        
                        <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #4CAF50; margin: 25px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Asunto:</strong> <span style="color: #555;">${data.asunto}</span></p>
                            <p style="margin: 10px 0;"><strong style="color: #333;">Tu mensaje:</strong></p>
                            <p style="font-style: italic; color: #666; background: white; padding: 15px; border-radius: 5px; margin: 10px 0 0 0; border: 1px solid #e0e0e0;">"${data.mensaje}"</p>
                        </div>
                        
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
                            <p style="font-size: 16px; margin-bottom: 15px; font-weight: 600; color: #333;">Mientras tanto, puedes:</p>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin: 10px 0; padding: 8px 0;">
                                    <a href="https://linkedin.com/in/tu-perfil" style="color: #0077B5; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center;">
                                        🔗 Conectar conmigo en LinkedIn
                                    </a>
                                </li>
                                <li style="margin: 10px 0; padding: 8px 0;">
                                    <a href="https://github.com/NicoGomezM" style="color: #333; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center;">
                                        💻 Ver mi trabajo en GitHub
                                    </a>
                                </li>
                                <li style="margin: 10px 0; padding: 8px 0;">
                                    <span style="color: #666; font-weight: 500;">📱 Revisar mis proyectos en mi portfolio</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white;">
                            <p style="margin: 0 0 5px 0; font-size: 18px; font-weight: 600;">¡Saludos!</p>
                            <p style="margin: 5px 0 0 0; font-size: 16px;"><strong>Nicolás Gómez Morgado</strong></p>
                            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Desarrollador Junior Full Stack</p>
                        </div>
                        
                        <div style="border-top: 2px solid #f0f0f0; margin: 25px 0; padding-top: 15px; text-align: center;">
                            <p style="font-size: 12px; color: #999; margin: 0;">Este es un mensaje automático. Por favor, no respondas a este correo.</p>
                        </div>
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