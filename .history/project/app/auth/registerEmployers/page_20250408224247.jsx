import React from "react";

const registerEmployers = () => {
  return (
    <div className="bg-[#f6f6f6] pt-20 min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-[560px] bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <img
              src="https://cdn1.vieclam24h.vn/images/public/2024/05/17/logo_vl24h_171593792526.png"
              className="mx-auto w-[143px]"
              alt="Logo"
            />
            <h2 className="text-[24px] font-semibold mt-4">
              Đăng ký tài khoản nhà tuyển dụng
            </h2>
          </div>

          <form className="space-y-6">
            {/* THÔNG TIN TÀI KHOẢN */}
            <div>
              <h3 className="font-bold text-[18px] text-gray-800 mb-4">
                Thông tin tài khoản
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Điền họ và tên"
                    className="mt-1 block w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Điền số điện thoại"
                    className="mt-1 block w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Điền email"
                    className="mt-1 block w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Mật khẩu <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Điền mật khẩu"
                      className="mt-1 block w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                      👁️
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-gray-800 mb-4">
                Thông tin công ty
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Tên công ty <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-1">
                    Theo giấy phép kinh doanh
                  </p>
                  <input
                    type="text"
                    placeholder="Điền tên công ty"
                    className="block w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Địa điểm <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 block w-full border border-blue-200 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Chọn tỉnh thành phố</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                Bạn đã có tài khoản?{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Đăng nhập
                </a>
              </p>

              <button
                type="submit"
                className="bg-[#4C1D95] text-white font-semibold px-6 py-2 rounded-md mt-4 md:mt-0 hover:bg-[#3B0E7C]"
              >
                Hoàn thành đăng ký
              </button>
            </div>

            <p className="text-[12px] text-gray-500 text-center">
              Bằng việc nhấn nút đăng ký, bạn đã đồng ý với{" "}
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Điều khoản sử dụng
              </span>{" "}
              của Việc Làm 24h
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default registerEmployers;
