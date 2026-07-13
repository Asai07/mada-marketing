"use server";

import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function login(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD?.replace(/^"|"$/g, '').trim();

  console.log("Input:", password);
  console.log("Expected:", adminPassword);

  if (!adminPassword) {
    return { error: "Configura ADMIN_PASSWORD en el archivo .env" };
  }

  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    });
    return { success: true };
  } else {
    return { error: "Contraseña incorrecta" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}

export async function getContacts() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, contacts };
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { error: "Error al cargar los contactos" };
  }
}

export async function updateContactStatus(id: string, status: string) {
  try {
    await prisma.contact.update({
      where: { id },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating contact:", error);
    return { error: "Error al actualizar el estado" };
  }
}

export async function deleteContact(id: string) {
  try {
    await prisma.contact.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { error: "Error al eliminar el contacto" };
  }
}
