import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nacho Lab",
  description: "Private betting intelligence dashboard",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
