'use server';

import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const plan = formData.get('plan') as string;
    const message = formData.get('message') as string; // Optional message

    if (!name || !email || !phone) {
      return { success: false, error: "Faltan campos obligatorios" };
    }

    // 1. Guardar en Base de Datos
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        service: service || 'No especificado',
        plan: plan || null,
      },
    });

    // 2. Enviar correo de notificación usando Resend
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #000;">¡Nuevo Lead desde la Web! 🚀</h2>
            <p>Alguien ha llenado el formulario de contacto para agendar una llamada.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>
              <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
              ${plan ? `<p><strong>Plan de interés:</strong> ${plan}</p>` : ""}
              ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ""}
            </div>
            <p style="font-size: 12px; color: #888;">Ingresa al <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin">Panel de Administración</a> para gestionar este contacto.</p>
          </div>
        `;

        await resend.emails.send({
          from: 'Notificaciones <onboarding@resend.dev>',
          to: process.env.ADMIN_EMAIL || 'somosmadamkt@gmail.com',
          subject: `Nuevo lead: ${name} - ${service || 'General'}`,
          html: emailHtml,
        });
      }
    } catch (emailError) {
      console.error("Error al enviar email:", emailError);
    }

    return { success: true, message: "Contacto guardado correctamente" };
  } catch (error) {
    console.error("Error en Server Action de contacto:", error);
    return { success: false, error: "Error interno del servidor" };
  }
}
