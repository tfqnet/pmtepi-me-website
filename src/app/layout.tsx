import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pmtepi.me"),
  title: "Taufiq Tomadan | PM Tepi Me — IT Consultant & Builder",
  description:
    "Senior IT Consultant based in Kuala Lumpur. 12+ years in enterprise solution architecture and technical project management. Also ships side projects, AI tools, and open-source experiments.",
  openGraph: {
    title: "Taufiq Tomadan | PM Tepi Me",
    description:
      "IT Consultant & Builder · Solution Architecture · AI Projects · Kuala Lumpur",
    url: "https://pmtepi.me",
    siteName: "PM Tepi Me",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufiq Tomadan | PM Tepi Me",
    description: "IT Consultant & Builder based in Kuala Lumpur.",
  },
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
