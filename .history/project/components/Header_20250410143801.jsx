"use client";
import React, { useState } from "react";
import LoginDevelops from "./Develops/LoginDevelops";
import RegisterDevelops from "./Develops/RegisterDevelops";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("login"); // "login" | "register"

  const handleOpenLogin = () => {
    setMode("login");
    setShowModal(true);
  };

  const handleOpenRegister = () => {
    setMode("register");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-4 shadow-md">
      <div className="container mx-auto max-w-screen-2xl flex justify-between items-center px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="text-xl font-bold tracking-wide">TUYỂN DỤNG IT</span>
        </div>
        <nav className="hidden lg:flex space-x-6 gap-4">
          <a href="" className="hover:text-gray-200 transition">
            All Jobs
          </a>
          <a href="/company" className="hover:text-gray-200 transition">
            IT Company
          </a>
          <a href="/blog" className="hover:text-gray-200 transition">
            Blog
          </a>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-sm font-semibold text-blue-600 px-3 py-1 bg-blue-50 rounded-full shadow-sm cursor-default">
            Người tìm việc
          </span>

          <button
            onClick={handleOpenLogin}
            className="text-sm font-medium hover:underline"
          >
            Đăng ký / Đăng nhập
          </button>
          <a
            href="#"
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <i className="bi bi-briefcase text-lg"></i>
            <span>Dành cho Nhà Tuyển Dụng</span>
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 text-white py-4 px-6 space-y-3">
          <a href="#" className="block hover:text-gray-200">
            All Jobs
          </a>
          <a href="#" className="block hover:text-gray-200">
            IT Company
          </a>
          <a href="#" className="block hover:text-gray-200">
            Blog
          </a>
          <hr className="border-gray-500 my-2" />
          <a href="#" className="block text-sm font-medium hover:underline">
            Người tìm việc
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleOpenLogin();
            }}
            className="block text-sm font-medium hover:underline"
          >
            Đăng ký / Đăng nhập
          </button>
          <a
            href="#"
            className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <i className="bi bi-briefcase text-lg mr-2"></i>
            Dành cho Nhà Tuyển Dụng
          </a>
        </div>
      )}

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
    </header>
  );
};

export default Header;
