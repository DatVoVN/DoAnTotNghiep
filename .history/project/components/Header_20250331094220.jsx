import React from "react";

const Header = () => {
  return (
    <header className="bg-purple-700 text-white py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-lg font-semibold">TUYỂN DỤNG IT</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Cơ hội việc làm
          </a>
          <a href="#" className="hover:underline">
            Cẩm nang nghề nghiệp
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-semibold">
            Người tìm việc
          </a>
          <a href="#" className="text-sm font-semibold hover:underline">
            Đăng ký / Đăng nhập
          </a>
          <a href="#" className="flex items-center space-x-2 font-semibold">
            <i className="bi bi-briefcase text-lg"></i>
            <span>Dành cho Nhà Tuyển Dụng</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
