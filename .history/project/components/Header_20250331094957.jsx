import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-3 px-6 h-16">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-lg font-semibold">TUYỂN DỤNG IT</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <a href="#" className="hover:underline">
            Cơ hội việc làm
          </a>
          <a href="#" className="hover:underline">
            Cẩm nang nghề nghiệp
          </a>
        </nav>

        {/* Các nút bên phải */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <a href="#" className="text-sm font-semibold">
            Người tìm việc
          </a>
          <a href="#" className="text-sm font-semibold hover:underline">
            Đăng ký / Đăng nhập
          </a>
          <a href="#" className="flex items-center gap-2 font-semibold">
            <i className="bi bi-briefcase text-lg"></i>
            <span>Dành cho Nhà Tuyển Dụng</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
