import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POS Dashboard - Colegio De Santa Rita",
  description: "Point of Sale Dashboard System for Colegio De Santa Rita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full">{children}</body>
    </html>
  );
}
