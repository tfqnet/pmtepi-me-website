import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Tepi Me - Digital Solutions",
  description: "Building smart, practical, and scalable digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
