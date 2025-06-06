import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certo Website Design",
  description: "This is a Design of Certo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
