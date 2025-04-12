"use client";
import React, { useState, useEffect, useRef } from "react"; // Import useEffect, useRef
import Link from "next/link";
import Image from "next/image";
import LoginDevelops from "./Develops/LoginDevelops";
import RegisterDevelops from "./Develops/RegisterDevelops";
// Import icon (ví dụ: User icon) - Bạn cần cài đặt react-icons hoặc thư viện tương tự
import { FaUserCircle } from "react-icons/fa"; // Ví dụ với react-icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("login");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State cho user dropdown

  const userMenuRef = useRef(null); // Ref cho user dropdown để xử lý click outside

  // --- Hàm xử lý Modal ---
  const handleOpenLogin = () => {
    setMode("login");
    setShowModal(true);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false); // Đóng user dropdown khi mở modal
  };

  const handleOpenRegister = () => {
    setMode("register");
    setShowModal(true);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false); // Đóng user dropdown khi mở modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // --- Hàm xử lý Menu ---
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false); // Đóng user dropdown khi mở mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMobileMenuOpen(false); // Đóng mobile menu khi mở user dropdown
  };

  // --- Xử lý đóng dropdown khi click bên ngoài (optional but recommended) ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra ref tồn tại và click không nằm trong phần tử ref
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    // Add event listener khi dropdown mở
    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove khi dropdown đóng hoặc component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]); // Dependency array chỉ chứa isUserMenuOpen

  const employerPath = "/employer";

  return (
    <>
      <header className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-4 shadow-md relative z-20">
        <div className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Logo Tuyển Dụng IT"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap">
              TUYỂN DỤNG IT
            </span>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center flex-grow justify-end gap-4 xl:gap-6">
            <nav className="flex space-x-4 md:space-x-6">
              <Link
                href="/alljob"
                className="hover:text-gray-300 transition text-sm xl:text-base"
              >
                All Jobs
              </Link>
              <Link
                href="/company"
                className="hover:text-gray-300 transition text-sm xl:text-base"
              >
                IT Company
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-300 transition text-sm xl:text-base"
              >
                Blog
              </Link>
            </nav>

            <div className="h-6 border-l border-gray-600 mx-2"></div>

            <div className="flex items-center space-x-3 xl:space-x-4">
              {/* Nút Người tìm việc (nếu cần) */}
              <span className="text-xs xl:text-sm font-semibold text-blue-600 px-3 py-1 bg-blue-100 rounded-full shadow-sm cursor-default whitespace-nowrap">
                Người tìm việc
              </span>

              {/* --- User Dropdown Area --- */}
              <div className="relative" ref={userMenuRef}>
                {" "}
                {/* Thêm ref vào đây */}
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center gap-1 text-xs xl:text-sm font-medium hover:text-gray-300 focus:outline-none"
                  aria-haspopup="true" // Accessibility
                  aria-expanded={isUserMenuOpen} // Accessibility
                >
                  <FaUserCircle className="text-lg xl:text-xl opacity-80" />{" "}
                  {/* Icon người dùng */}
                  <span>Tài khoản</span>
                  {/* Optional: Add a down arrow icon */}
                  {/* <i className={`bi bi-chevron-down transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}></i> */}
                </button>
                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 text-black">
                    {/* Logic hiển thị khi CHƯA đăng nhập */}
                    <>
                      <button
                        onClick={handleOpenLogin}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Đăng nhập
                      </button>
                      <button
                        onClick={handleOpenRegister}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Đăng ký
                      </button>
                    </>
                    {/* TODO: Thêm logic hiển thị khi ĐÃ đăng nhập (ví dụ: Hồ sơ, Đăng xuất) */}
                  </div>
                )}
              </div>
              {/* --- End User Dropdown Area --- */}

              {/* Nút Nhà tuyển dụng */}
              <Link
                href={employerPath}
                className="flex items-center gap-1.5 xl:gap-2 bg-white text-blue-600 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition text-xs xl:text-sm whitespace-nowrap"
              >
                <i className="bi bi-briefcase text-base xl:text-lg"></i>
                <span>Nhà Tuyển Dụng</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <i className="bi bi-x text-3xl"></i>
              ) : (
                <i className="bi bi-list text-3xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full -z-10"
          } ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto max-w-screen-2xl px-6 py-4 space-y-3">
            {/* Mobile Nav Links */}
            <Link
              href="/alljob"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              All Jobs
            </Link>
            <Link
              href="/company"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              IT Company
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>

            <hr className="border-gray-600 my-3" />

            {/* Mobile Actions */}
            <div className="py-2 text-sm font-semibold text-blue-300">
              Người tìm việc
            </div>
            {/* --- Mobile User Actions --- */}
            {/* Hiển thị các nút trực tiếp hoặc có thể tạo dropdown riêng nếu muốn */}
            <button
              onClick={handleOpenLogin}
              className="block py-2 text-sm font-medium hover:underline w-full text-left"
            >
              Đăng nhập
            </button>
            <button
              onClick={handleOpenRegister}
              className="block py-2 text-sm font-medium hover:underline w-full text-left"
            >
              Đăng ký
            </button>
            {/* --- End Mobile User Actions --- */}

            <hr className="border-gray-600 my-3" />

            <Link
              href={employerPath}
              className="flex items-center justify-center gap-2 w-full bg-white text-blue-600 px-4 py-2.5 my-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
              onClick={closeMobileMenu}
            >
              <i className="bi bi-briefcase text-lg mr-1"></i>
              Dành cho Nhà Tuyển Dụng
            </Link>
          </div>
        </div>
      </header>

      {/* Modals (Giữ nguyên bên ngoài header) */}
      {mode === "login" && (
        <LoginDevelops
          isOpen={showModal}
          onClose={handleCloseModal}
          onSwitchToRegister={() => setMode("register")}
        />
      )}
      {mode === "register" && (
        <RegisterDevelops
          isOpen={showModal}
          onClose={handleCloseModal}
          onSwitchToLogin={() => setMode("login")}
        />
      )}
    </>
  );
};

export default Header;
