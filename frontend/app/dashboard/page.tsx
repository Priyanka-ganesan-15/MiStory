import { AppShell } from "@/components/layout/app-shell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">
          Good Evening 👋
        </h1>

        <p className="text-gray-500">
          How are you feeling today?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border rounded-lg">
            🎤 Start Voice Entry
          </div>

          <div className="p-4 bg-white border rounded-lg">
            ✍️ Write Journal
          </div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          Recent Entries (coming soon)
        </div>

        <div className="p-4 bg-white border rounded-lg">
          Timeline Preview (coming soon)
        </div>
      </div>
    </AppShell>
  );
}