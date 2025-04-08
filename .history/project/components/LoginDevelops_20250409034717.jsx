import React from "react";

const LoginDevelops = ({ isOpen, onClose }) => {
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
          Đăng ký hoặc Đăng nhập
        </h3>

        <div className="space-y-4">
          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-50">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Với Google
          </button>

          <div className="flex items-center w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm whitespace-nowrap">
              Tiếp tục với email
            </span>
            <hr className="flex-grow border-gray-300" />
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

          <div className="flex items-start text-sm text-gray-600">
            <input type="checkbox" defaultChecked className="mr-2 mt-1" />
            <p>
              Bằng việc nhấn nút tiếp tục, tôi đồng ý chia sẻ thông tin cá nhân
              của mình với nhà tuyển dụng theo các{" "}
              <a href="#" className="text-blue-600 underline">
                Điều khoản sử dụng
              </a>
            </p>
          </div>

          <button className="w-full bg-[#5A00CC] hover:bg-[#4C00B8] text-white font-semibold py-2 rounded">
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginDevelops;
