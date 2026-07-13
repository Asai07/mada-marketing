import { cookies } from "next/headers";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

export const metadata = {
  title: "Panel de Administración | Mada",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value === "true") {
    return <AdminDashboard />;
  }

  return <AdminLogin />;
}
