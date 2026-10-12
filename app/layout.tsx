import type { Metadata } from "next";
import Header from "./../src/components/Header";
import Footer from "./../src/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "دربستی تهران به شمال با راننده مشخص",
  description: "دربستی تهران به چالوس، نوشهر و رامسر با راننده مشخص. برای هماهنگی زمان حرکت تماس بگیرید",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}