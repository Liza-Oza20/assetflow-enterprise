import { getCurrentSession } from "@/lib/session";

export default async function DashboardPage() {
  const session = await getCurrentSession();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome back, {session?.name.split(" ")[0]}
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        You&apos;re signed in as{" "}
        <span className="font-medium text-gray-700">{session?.role}</span>.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Assets", value: "—" },
          { label: "Active Bookings", value: "—" },
          { label: "Pending Maintenance", value: "—" },
          { label: "Unread Notifications", value: "—" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
