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
  const noLayoutRoutes = ["/auth/loginEmployers", "/auth/registerEmployers"];

  const shouldHideHeader =
    noLayoutRoutes.includes(pathname) ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/employer");

  const shouldHideFooter =
    noLayoutRoutes.includes(pathname) || pathname.startsWith("/admin");

  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {!shouldHideHeader && <Header />}

          <main className="flex-1">{children}</main>

          {!shouldHideFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
