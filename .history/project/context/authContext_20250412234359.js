// context/AuthContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // Lưu thông tin người dùng (từ /me)
  const [isLoading, setIsLoading] = useState(true); // Loading ban đầu để kiểm tra token

  // Hàm gọi API /me để lấy thông tin user từ token
  const fetchUser = async (currentToken) => {
    if (!currentToken) {
      setUser(null);
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/candidates/me", {
        headers: {
          Authorization: `Bearer ${currentToken}`, // Gửi token trong header
        },
      });
      if (!response.ok) {
        throw new Error("Token không hợp lệ hoặc hết hạn");
      }
      const data = await response.json();
      setUser(data.data); // Lưu thông tin user vào state
    } catch (error) {
      console.error("Lỗi fetch user:", error);
      setToken(null); // Xóa token nếu không hợp lệ
      setUser(null);
      localStorage.removeItem("authToken"); // Xóa token khỏi localStorage
    }
  };

  // Kiểm tra token trong localStorage khi component mount lần đầu
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken).finally(() => setIsLoading(false)); // Fetch user và dừng loading
    } else {
      setIsLoading(false); // Không có token, dừng loading
    }
  }, []);

  // Hàm xử lý sau khi đăng nhập thành công
  const handleLoginSuccess = (loginData) => {
    const newToken = loginData.token;
    setToken(newToken);
    setUser(loginData.candidate); // Có thể dùng tạm data này trước khi fetch /me
    localStorage.setItem("authToken", newToken); // Lưu token vào localStorage
    // Có thể gọi fetchUser(newToken) ngay lập tức nếu muốn lấy data mới nhất từ /me
  };

  // Hàm đăng xuất
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    // Có thể thêm chuyển hướng về trang chủ nếu cần
  };

  return (
    <AuthContext.Provider
      value={{ token, user, isLoading, handleLoginSuccess, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
