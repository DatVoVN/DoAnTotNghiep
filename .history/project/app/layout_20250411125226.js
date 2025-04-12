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

  // Danh sách các route KHÔNG hiển thị CẢ Header và Footer
  const noLayoutRoutes = [
    "/auth/loginEmployers",
    "/auth/registerEmployers",
    // Chúng ta sẽ xử lý /admin và /employer riêng bằng startsWith
  ];

  // --- Logic ẩn Header ---
  // Ẩn Header nếu:
  // 1. Route nằm trong danh sách noLayoutRoutes
  // 2. Route bắt đầu bằng /admin
  // 3. Route bắt đầu bằng /employer (vì bạn muốn code header khác cho nó)
  const shouldHideHeader =
    noLayoutRoutes.includes(pathname) ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/employer");

  // --- Logic ẩn Footer ---
  // Ẩn Footer nếu:
  // 1. Route nằm trong danh sách noLayoutRoutes
  // 2. Route bắt đầu bằng /admin
  // Lưu ý: KHÔNG ẩn Footer cho /employer
  const shouldHideFooter =
    noLayoutRoutes.includes(pathname) || pathname.startsWith("/admin");

  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Chỉ hiển thị Header nếu shouldHideHeader là false */}
          {!shouldHideHeader && <Header />}

          <main className="flex-1">{children}</main>

          {/* Chỉ hiển thị Footer nếu shouldHideFooter là false */}
          {!shouldHideFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
