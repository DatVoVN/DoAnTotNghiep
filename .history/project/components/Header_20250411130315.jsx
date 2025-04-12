"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image for optimization
import LoginDevelops from "./Develops/LoginDevelops";
import RegisterDevelops from "./Develops/RegisterDevelops";

// Consider adding icons directly if not using a large icon library like Bootstrap Icons CDN
// import { BriefcaseIcon, ListIcon, XIcon } from '@heroicons/react/outline'; // Example with Heroicons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("login");

  const handleOpenLogin = () => {
    setMode("login");
    setShowModal(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const handleOpenRegister = () => {
    setMode("register");
    setShowModal(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const employerPath = "/employer"; // Consider defining this outside if used elsewhere

  return (
    <>
      {" "}
      {/* Use Fragment to avoid unnecessary div */}
      <header className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-4 shadow-md relative z-20">
        {" "}
        {/* Add z-index if needed */}
        <div className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20">
          {" "}
          {/* Adjusted padding for smaller screens */}
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            {" "}
            {/* Allow shrinking if needed */}
            {/* Use next/image for better performance and optimization */}
            <Image
              src="/logo.png" // Ensure logo is in public folder
              alt="Logo Tuyển Dụng IT"
              width={40} // Provide explicit width
              height={40} // Provide explicit height
              className="h-8 w-8 sm:h-10 sm:w-10" // Responsive height/width
            />
            <span className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap">
              {" "}
              {/* Prevent wrap */}
              TUYỂN DỤNG IT
            </span>
          </Link>
          {/* Desktop Navigation & Actions */}
          {/* Consider changing lg:flex to md:flex if needed for tablets */}
          <div className="hidden lg:flex items-center flex-grow justify-end gap-4 xl:gap-6">
            {" "}
            {/* Use flex-grow and justify-end to push nav/actions right */}
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
            {/* Separator (Optional) */}
            <div className="h-6 border-l border-gray-600 mx-2"></div>
            <div className="flex items-center space-x-3 xl:space-x-4">
              <span className="text-xs xl:text-sm font-semibold text-blue-600 px-3 py-1 bg-blue-100 rounded-full shadow-sm cursor-default whitespace-nowrap">
                Người tìm việc
              </span>

              <button
                onClick={handleOpenLogin}
                className="text-xs xl:text-sm font-medium hover:underline whitespace-nowrap"
              >
                Đăng ký / Đăng nhập
              </button>
              <Link
                href={employerPath}
                // target="_blank" // Remove target blank if employer page is part of the same app/site
                // rel="noopener noreferrer"
                className="flex items-center gap-1.5 xl:gap-2 bg-white text-blue-600 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition text-xs xl:text-sm whitespace-nowrap"
              >
                {/* Example using Heroicons (install @heroicons/react)
                <BriefcaseIcon className="h-4 w-4 xl:h-5 xl:w-5" /> */}
                <i className="bi bi-briefcase text-base xl:text-lg"></i>{" "}
                {/* Ensure Bootstrap Icons loaded */}
                <span>Nhà Tuyển Dụng</span> {/* Shortened text */}
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none p-2" // Add padding for easier tapping
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu" // Accessibility
            >
              {/* Use an X icon when menu is open */}
              {isMobileMenuOpen ? (
                <i className="bi bi-x text-3xl"></i> // Close Icon
              ) : (
                <i className="bi bi-list text-3xl"></i> // Hamburger Icon
              )}
              {/* Example with Heroicons:
              {isMobileMenuOpen ? (
                <XIcon className="h-7 w-7" />
              ) : (
                <ListIcon className="h-7 w-7" />
              )} */}
            </button>
          </div>
        </div>
        {/* Mobile Menu Panel */}
        {/* Smooth Transition (Optional but nice) */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full -z-10" // Hide off-screen and lower z-index when closed
          } ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`} // Fade effect
        >
          <div className="container mx-auto max-w-screen-2xl px-6 py-4 space-y-3">
            {/* Links */}
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

            {/* Actions */}
            <div className="py-2 text-sm font-semibold text-blue-300">
              Người tìm việc
            </div>
            <button
              onClick={handleOpenLogin}
              className="block py-2 text-sm font-medium hover:underline w-full text-left"
            >
              Đăng ký / Đăng nhập
            </button>
            <hr className="border-gray-600 my-3" />
            <Link
              href={employerPath}
              // target="_blank"
              // rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-blue-600 px-4 py-2.5 my-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
              onClick={closeMobileMenu}
            >
              <i className="bi bi-briefcase text-lg mr-1"></i>
              Dành cho Nhà Tuyển Dụng
            </Link>
          </div>
        </div>
      </header>
      {/* ---- Modals ---- */}
      {/* Ensure modals are outside the header structure if they are full-screen or centered overlays */}
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
