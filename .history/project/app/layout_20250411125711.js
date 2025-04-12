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

  // Kiểm tra xem có phải route của employer không
  const isEmployerRoute = pathname.startsWith("/employer");

  // Kiểm tra xem có phải route của admin không
  const isAdminRoute = pathname.startsWith("/admin");

  // Kiểm tra xem có phải route cần ẩn hoàn toàn layout không
  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  // --- Logic ẩn Header ---
  // Quyết định KHÔNG hiển thị BẤT KỲ header nào
  const shouldHideAnyHeader = isNoLayoutRoute || isAdminRoute;

  // --- Logic ẩn Footer ---
  // Footer bị ẩn cho admin và các route trong noLayoutRoutes
  const shouldHideFooter = isNoLayoutRoute || isAdminRoute;

  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Logic hiển thị Header */}
          {!shouldHideAnyHeader && // Chỉ hiển thị nếu không thuộc nhóm ẩn hoàn toàn
            (isEmployerRoute ? (
              <Header2 /> // Hiển thị Header2 cho trang employer
            ) : (
              <Header /> // Hiển thị Header mặc định cho các trang còn lại (public)
            ))}

          <main className="flex-1">{children}</main>

          {/* Chỉ hiển thị Footer nếu shouldHideFooter là false */}
          {!shouldHideFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
