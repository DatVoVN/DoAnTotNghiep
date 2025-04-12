"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
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

  const isEmployerRoute = pathname.startsWith("/employer");
  const isAdminRoute = pathname.startsWith("/admin/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
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

  const isEmployerRoute = pathname.startsWith("/employer");
  const isAdminRoute = pathname.startsWith("/admin");
  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  const shouldHideAnyHeader = isNoLayoutRoute || isAdminRoute;
  const shouldHideFooter = isEmployerRoute || isAdminRoute || isNoLayoutRoute;

  const bodyBgColor = isEmployerRoute ? "bg-gray-900" : "bg-white";

  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${bodyBgColor}`}
      >
        <div className="min-h-screen flex flex-col">
          {!shouldHideAnyHeader && (isEmployerRoute ? <Header2 /> : <Header />)}
          <main className="flex-1">{children}</main>
          {!shouldHideFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}