import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, service, plan } = data;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 1. Guardar en Base de Datos (Neon Postgres via Prisma)
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        service,
        plan: plan || null,
      },
    });

    // 2. Enviar correo de notificación usando Resend
    try {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000;">¡Nuevo Lead desde la Web! 🚀</h2>
          <p>Alguien ha llenado el formulario de contacto para agendar una llamada.</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>
            <p><strong>Servicio:</strong> ${service}</p>
            ${plan ? `<p><strong>Plan de interés:</strong> ${plan}</p>` : ""}
          </div>
          <p style="font-size: 12px; color: #888;">Ingresa al <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin">Panel de Administración</a> para gestionar este contacto.</p>
        </div>
      `;

      await resend.emails.send({
        from: 'Notificaciones <onboarding@resend.dev>', // Usamos este correo de prueba mientras configuras tu propio dominio
        to: process.env.ADMIN_EMAIL || 'somosmadamkt@gmail.com', // El correo al que llegarán las notificaciones
        subject: `Nuevo lead: ${name} - ${service}`,
        html: emailHtml,
      });
    } catch (emailError) {
      console.error("Error al enviar email:", emailError);
      // No hacemos return de error aquí porque el contacto SÍ se guardó en la DB
    }

    return NextResponse.json(
      { message: "Contacto guardado correctamente", contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
