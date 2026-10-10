import type { Metadata } from "next";
import Header from "./../src/components/Header";
import Footer from "./../src/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "سفر شمال | سرویس تهران به شمال",
  description:
    "سرویس دربستی تهران به چالوس، کلاردشت و نوشهر با راننده باتجربه.",
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