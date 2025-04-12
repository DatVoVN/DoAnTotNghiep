"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header mặc định
import Header2 from "@/components/Header2"; // Header cho trang Employer
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

  // Danh sách các route KHÔNG hiển thị CẢ Header và Footer
  const noLayoutRoutes = ["/auth/loginEmployers", "/auth/registerEmployers"];
  const isEmployerRoute = pathname.startsWith("/employer");
  const isAdminRoute = pathname.startsWith("/admin");
  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);
  const shouldHideAnyHeader = isNoLayoutRoute || isAdminRoute;
  const shouldHideFooter = isNoLayoutRoute || isAdminRoute;

  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
