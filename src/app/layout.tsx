import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asset Management",
  description: "Internal asset allocation, booking & maintenance system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
