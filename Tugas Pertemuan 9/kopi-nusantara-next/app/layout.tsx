import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara",
  description: "Racikan Rumah, Cita Rasa Nusantara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* CDN Boxicons untuk ikon hamburger dan ikon lainnya */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}