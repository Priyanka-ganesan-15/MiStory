import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata = {
  title: "MiStory",
  description: "AI health journaling system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}