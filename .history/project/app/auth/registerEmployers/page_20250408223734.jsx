import React from "react";

const registerEmployers = () => {
  return (
    <div className="bg-[#f6f6f6] pt-20 min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-[560px] px-4">
          <div className="flex justify-center mb-4">
            <img
              src="https://cdn1.vieclam24h.vn/images/public/2024/05/17/logo_vl24h_171593792526.png"
              className="w-[143px]"
              alt="Logo"
            />
          </div>
          <h4 className="text-[24px] leading-10 text-neutral-800 text-center font-semibold mb-6">
            Đăng ký tài khoản nhà tuyển dụng
          </h4>

          <form
            noValidate
            autoComplete="on"
            className="bg-white shadow-md rounded-lg p-6"
          >
            <p className="font-bold text-[18px] leading-8 mb-3">
              Thông tin tài khoản
            </p>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact_name"
                placeholder="Điền họ và tên"
                className="w-full form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact_phone[0]"
                placeholder="Điền số điện thoại"
                className="w-full form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Điền email"
                className="w-full form-input"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block font-medium mb-1">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Điền mật khẩu"
                className="w-full form-input"
              />
              {/* Thêm icon hiện/ẩn mật khẩu nếu muốn */}
            </div>

            <p className="font-bold text-[18px] leading-8 mb-3">
              Thông tin công ty
            </p>

            <div className="mb-4">
              <label className="block font-medium mb-1">
                Tên công ty <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Điền tên công ty"
                className="w-full form-input"
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-1">
                Địa điểm <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Chọn tỉnh thành phố"
                className="w-full form-input"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <p className="text-[14px] text-neutral-600">
                Bạn đã có tài khoản?{" "}
                <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
                  Đăng nhập
                </span>
              </p>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg mt-3 md:mt-0 h-10 font-semibold"
              >
                Hoàn thành đăng ký
              </button>
            </div>

            <p className="text-[12px] text-neutral-600 text-center mt-4">
              Bằng việc nhấn nút đăng ký, bạn đã đồng ý với{" "}
              <b className="text-blue-500 cursor-pointer hover:underline">
                Điều khoản sử dụng
              </b>{" "}
              của Việc Làm 24h
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default registerEmployers;
