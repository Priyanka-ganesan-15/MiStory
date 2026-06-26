"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-70 bg-white border-r h-full p-4">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-blue-600">
          {APP_NAME}
        </h1>
        <p className="text-xs text-gray-500">
          Health journaling, simplified
        </p>
      </div>

      <nav className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition",
                active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}