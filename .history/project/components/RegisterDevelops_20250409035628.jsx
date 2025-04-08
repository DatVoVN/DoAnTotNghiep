import React from "react";

const RegisterDevelops = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm text-black">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-center text-xl font-semibold mb-4">
          Người tìm việc
        </h2>
        <h3 className="text-center text-[22px] font-bold mb-4">
          Tạo tài khoản mới
        </h3>

            <label className="text-sm font-medium">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Địa chỉ Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Nhập lại mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-sm text-gray-600">
            Bằng việc nhấn nút đăng ký, tôi đồng ý với các{" "}
            <a href="#" className="text-blue-600 underline">
              Điều khoản sử dụng
            </a>
          </div>

          <button className="w-full bg-[#5A00CC] hover:bg-[#4C00B8] text-white font-semibold py-2 rounded">
            Đăng ký
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Bạn đã có tài khoản?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-blue-600 hover:underline font-medium"
            >
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterDevelops;
