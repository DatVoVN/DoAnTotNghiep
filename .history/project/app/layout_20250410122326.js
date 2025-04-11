"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = [
    "/auth/loginEmployers",
    "/auth/registerEmployers",
    "/admin",
  ];

  const hideLayout = noHeaderFooterRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {!hideLayout && <Header />}

          {/* Nội dung chính */}
          <main className="flex-1">{children}</main>

          {!hideLayout && <Footer />}
        </div>
      </body>
    </html>
  );
}
