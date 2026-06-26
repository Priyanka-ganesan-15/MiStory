import {
  LayoutDashboard,
  BookText,
  Activity,
  MessageSquare,
  FileText,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Journal",
    href: "/journal",
    icon: BookText,
  },
  {
    name: "Timeline",
    href: "/timeline",
    icon: Activity,
  },
  {
    name: "Health Memory",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Doctor Summary",
    href: "/summary",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];