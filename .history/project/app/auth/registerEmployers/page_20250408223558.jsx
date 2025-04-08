import React from "react";

const registerEmployers = () => {
  return <div className="bg-[#f6f6f6] pt-20 min-h-screen">
    <div class="flex justify-between 2xl:h-[calc(100vh-80px)]">
  <div class="w-auto mt-[-20px] flex-1">
    <div class="flex justify-center items-center w-full h-full">
      <div>
        <div class="m-auto md:w-[560px] mt-2">
          <h4 class="text-[20px] md:text-[24px] leading-8 md:leading-10 text-neutral-800 md:text-left text-center">
            Đăng ký tài khoản nhà tuyển dụng
          </h4>
        </div>
        <div class="m-auto">
          <div class="relative">
            <form novalidate autocomplete="on">
              <div class="text-neutral-800">
                <p class="font-bold text-[18px] leading-8 md:mb-3">Thông tin tài khoản</p>
                <div class="mb-4">
                  <label class="block font-medium mb-1">Họ và tên</label>
                  <input type="text" name="contact_name" placeholder="Điền họ và tên"
                    class="w-full form-input border border-gray-300 rounded px-3 py-2" />
                </div>
                <div class="mb-4">
                  <label class="block font-medium mb-1">Số điện thoại</label>
                  <input type="text" name="contact_phone[0]" placeholder="Điền số điện thoại"
                    class="w-full form-input border border-gray-300 rounded px-3 py-2" />
                </div>
                <div class="mb-4">
                  <label class="block font-medium mb-1">Email</label>
                  <input type="email" name="email" placeholder="Điền email"
                    class="w-full form-input border border-gray-300 rounded px-3 py-2" />
                </div>
                <div class="mb-4 relative">
                  <label class="block font-medium mb-1">Mật khẩu</label>
                  <input type="password" name="password" placeholder="Điền mật khẩu"
                    class="w-full form-input border border-gray-300 rounded px-3 py-2" />
                  <div class="absolute right-2 top-3 cursor-pointer select-none">
                    <!-- Bạn có thể chèn icon hiện ẩn mật khẩu tại đây -->
                  </div>
                </div>
              </div>

              <p class="font-bold text-[18px] leading-8 md:mb-3 mt-6">Thông tin công ty</p>

              <div class="mb-4">
                <label class="block font-medium mb-1">Tên công ty <span class="text-xs text-gray-500">(Theo giấy phép kinh doanh)</span></label>
                <input type="text" name="name" placeholder="Điền tên công ty"
                  class="w-full form-input border border-gray-300 rounded px-3 py-2" />
              </div>

              <div class="mb-4">
                <label class="block font-medium mb-1">Địa điểm</label>
                <input type="text" placeholder="Chọn tỉnh thành phố"
                  class="w-full form-input border border-gray-300 rounded px-3 py-2 cursor-pointer" />
              </div>

              <div class="mb-6">
                <label class="block font-medium mb-1">Lĩnh vực hoạt động</label>
                <input type="text" placeholder="Chọn lĩnh vực"
                  class="w-full form-input border border-gray-300 rounded px-3 py-2 cursor-pointer" />
              </div>

              <div class="flex flex-col md:flex-row justify-between md:items-center items-start">
                <div class="flex text-sm mt-2 md:mt-0 justify-center md:justify-start">
                  <span>Bạn đã có tài khoản?</span>
                  <a href="#" class="ml-1 text-blue-600 font-semibold">Đăng nhập</a>
                </div>
                <button type="submit"
                  class="bg-blue-600 text-white font-semibold text-sm px-6 py-2 rounded mt-3 md:mt-0">
                  Hoàn thành đăng ký
                </button>
              </div>

              <p class="text-center text-sm text-neutral-500 mt-4">
                Bằng việc nhấn nút đăng ký, bạn đã đồng ý với
                <b class="text-blue-600 cursor-pointer hover:underline">Điều khoản sử dụng</b> của Việc Làm 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Image section -->
  <div class="mt-[-20px] hidden md:block">
    <img src="https://cdn1.vieclam24h.vn/images/public/2024/05/17/Login_RE_171591715144.png"
      class="w-[720px] object-none object-top" />
  </div>
</div>

  </div>;
};

export default registerEmployers;
