// components/Develops/LoginDevelops.js
import React, { useState } from "react";
import { useAuth } from "@/context/authContext"; // Import useAuth

const LoginDevelops = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLoginSuccess } = useAuth(); // Lấy hàm từ context

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/v1/auth/candidate/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Lỗi ${response.status}`);
      }

      // Gọi hàm từ context để xử lý thành công
      handleLoginSuccess(data);
      onClose(); // Đóng modal sau khi thành công
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  // ... JSX của component giữ nguyên ...
  // Chỉ cần đảm bảo onSubmit gọi đúng handleSubmit
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm text-black">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative p-6">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold disabled:opacity-50"
        >
          ×
        </button>
        {/* Tiêu đề */}
        <div className="flex justify-center mb-4">
          <h2 className="text-center text-xl font-bold mb-4 text-blue-600 border border-blue-600 px-4 py-1 rounded-full inline-block">
            NGƯỜI TÌM VIỆC
          </h2>
        </div>
        <h3 className="text-center text-[22px] font-bold mb-4">ĐĂNG NHẬP</h3>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nút Google */}
          <button
            type="button"
            disabled={isLoading}
            className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Với Google
          </button>
          {/* Phân cách */}
          <div className="flex items-center w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm whitespace-nowrap">
              Tiếp tục với email
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email-login" className="text-sm font-medium">
              Địa chỉ Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email-login"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              disabled={isLoading}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
              autoComplete="email"
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password-login" className="text-sm font-medium">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              id="password-login"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              disabled={isLoading}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
              autoComplete="current-password"
            />
          </div>
          {/* Checkbox điều khoản */}
          <div className="flex items-start text-sm text-gray-600">
            <input
              type="checkbox"
              defaultChecked
              disabled={isLoading}
              className="mr-2 mt-1"
            />
            <p>
              Bằng việc nhấn nút tiếp tục, tôi đồng ý chia sẻ thông tin cá nhân
              của mình với nhà tuyển dụng theo các{" "}
              <a href="#" className="text-blue-600 underline">
                Điều khoản sử dụng
              </a>
            </p>
          </div>
          {/* Hiển thị lỗi */}
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          {/* Nút Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#5A00CC] hover:bg-[#4C00B8] text-white font-semibold py-2 rounded disabled:opacity-70 disabled:cursor-wait"
          >
            {isLoading ? "Đang xử lý..." : "Tiếp tục"}
          </button>
          {/* Link Đăng ký */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Bạn chưa có tài khoản?{" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              disabled={isLoading}
              className="text-blue-600 hover:underline font-medium disabled:opacity-50"
            >
              Đăng ký
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginDevelops;
