import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/session";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();

  // Belt-and-suspenders: middleware already protects this route,
  // but we double check here in case this layout is ever rendered directly.
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar
          user={{
            id: session.userId,
            name: session.name,
            email: session.email,
            role: session.role,
          }}
        />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
