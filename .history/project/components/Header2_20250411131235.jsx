"use client"; // Keep this directive

import React, { useState } from "react"; // Import useState
import Link from "next/link";
import Image from "next/image"; // Import Image if you decide to use it later

// You might need icons if using them consistently
// import { ListIcon, XIcon } from '@heroicons/react/outline'; // Example

const Header2 = () => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to explicitly close mobile menu (e.g., when a link is clicked)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <> {/* Use Fragment */}
      <header className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-4 shadow-md relative z-20"> {/* Match background and add z-index */}
        {/* Use consistent container and padding like the first Header */}
        <div className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20">

          {/* Logo Section (Kept original style from Header2 example) */}
          <div className="flex-shrink-0">
            <Link href="/employer" className="flex items-center gap-2"> {/* Link to employer home */}
              {/* it logo */}
              <span className="bg-red-600 rounded-full flex items-center justify-center h-8 w-8 md:h-9 md:w-9 mr-1 md:mr-2"> {/* Slightly adjusted size */}
                <span className="text-white font-bold text-sm md:text-base">
                  it
                </span>
              </span>
              {/* Text */}
              <span className="font-semibold text-base sm:text-lg md:text-xl whitespace-nowrap">
                viec <span className="font-normal">Nhà Tuyển Dụng</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation & Actions (Hidden below lg) */}
          {/* Use hidden lg:flex structure */}
          <div className="hidden lg:flex items-center flex-grow justify-end gap-4 xl:gap-6">
             {/* Add Employer specific navigation links here if needed */}
             {/* Example:
             <nav className="flex space-x-4 md:space-x-6">
                <Link href="/employer/dashboard" className="hover:text-gray-300 transition text-sm xl:text-base">Dashboard</Link>
                <Link href="/employer/jobs" className="hover:text-gray-300 transition text-sm xl:text-base">Manage Jobs</Link>
                <Link href="/employer/profile" className="hover:text-gray-300 transition text-sm xl:text-base">Company Profile</Link>
             </nav>
             <div className="h-6 border-l border-gray-600 mx-2"></div> // Optional Separator
             */}

            {/* Login/Language Section from original Header2 */}
            <div className="flex items-center space-x-3 xl:space-x-4">
              <Link
                href="/auth/loginEmployers" // Adjust link if needed (e.g., might be a logout button if logged in)
                className="text-xs xl:text-sm font-medium hover:underline whitespace-nowrap px-3 py-2"
              >
                Đăng nhập {/* Or "Đăng xuất", "Tài khoản" depending on auth state */}
              </Link>
              {/* Language Switcher */}
              <div className="flex items-center space-x-1 border-l border-gray-600 pl-3 xl:pl-4">
                <button className="text-xs xl:text-sm font-medium text-gray-400 hover:text-white focus:outline-none px-1">
                  EN
                </button>
                <span className="text-gray-500 text-xs">|</span>
                <button className="text-xs xl:text-sm font-bold text-white focus:outline-none px-1"> {/* Active VI */}
                  VI
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button (Visible below lg) */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <i className="bi bi-x text-3xl"></i> {/* Close Icon */}
              ) : (
                <i className="bi bi-list text-3xl"></i> {/* Hamburger Icon */}
              )}
              {/* Example with Heroicons:
               {isMobileMenuOpen ? <XIcon className="h-7 w-7" /> : <ListIcon className="h-7 w-7" />}
              */}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Panel --- */}
        {/* Use the same transition and positioning as the first Header */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full -z-10"
          } ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="container mx-auto max-w-screen-2xl px-6 py-4 space-y-3">
            {/* Add Employer specific mobile links here */}
            {/* Example:
            <Link href="/employer/dashboard" className="block py-2 hover:text-gray-300" onClick={closeMobileMenu}>Dashboard</Link>
            <Link href="/employer/jobs" className="block py-2 hover:text-gray-300" onClick={closeMobileMenu}>Manage Jobs</Link>
            <Link href="/employer/profile" className="block py-2 hover:text-gray-300" onClick={closeMobileMenu}>Company Profile</Link>
            <hr className="border-gray-600 my-3" />
            */}

            {/* Mobile Login Link */}
            <Link
              href="/auth/loginEmployers" // Adjust if needed
              className="block py-2 text-sm font-medium hover:underline"
              onClick={closeMobileMenu} // Close menu on click
            >
              Đăng nhập {/* Or Logout/Account */}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center space-x-2 pt-2">
               <button onClick={closeMobileMenu} className="text-sm font-medium text-gray-400 hover:text-white focus:outline-none px-2 py-1">
                  EN
                </button>
                <span className="text-gray-500">|</span>
                <button onClick={closeMobileMenu} className="text-sm font-bold text-white focus:outline-none px-2 py-1">
                  VI
                </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;