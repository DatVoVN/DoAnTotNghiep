import React from "react";

const LoginEmployers = () => {
  return (
    <div className="bg-[#f6f6f6] pt-20 min-h-screen">
      <div className="p-0 md:p-24 m-[12px] md:m-6 pt-20 min-h-screen bg-[#f6f6f6]">
        <div className="md:p-6 p-3 mx-auto bg-white rounded shadow-md max-w-md">
          <div className="text-lg font-semibold py-2 font-bold">
            Nhà tuyển dụng đăng nhập
          </div>
          <div className="relative">
            <form className="mt-3 space-y-4" autoComplete="on" noValidate>
              <div>
                <div className="py-1 font-semibold">Địa chỉ email</div>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <div className="py-1 font-semibold">Mật khẩu</div>
                <div className="flex relative">
                  <input
                    type="password"
                    name="password"
                    className="w-full border rounded px-3 py-2"
                  />
                  <div className="absolute right-2 top-2.5 cursor-pointer select-none"></div>
                </div>
              </div>

              <div className="py-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                >
                  Đăng nhập
                </button>
              </div>

              <div className="py-2 text-center">
                <a
                  href="/taikhoan/quen-mat-khau"
                  className="font-semibold text-sm text-blue-600 hover:underline"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="p-3 text-center mx-auto mt-4 text-sm">
          Bạn là nhà tuyển dụng mới?,&nbsp;
          <a
            href="/nha-tuyen-dung/tai-khoan"
            className="font-semibold text-sm underline text-blue-600"
          >
            Đăng ký tài khoản
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployers;
