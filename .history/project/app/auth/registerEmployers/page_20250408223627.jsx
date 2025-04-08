import React from "react";

const registerEmployers = () => {
  return (
    <div className="bg-[#f6f6f6] pt-20 min-h-screen">
      <div className="flex justify-between 2xl:h-[calc(100vh-80px)]">
        <div className="box-register-left w-auto -mt-5 flex-1">
          <div className="flex justify-center items-center w-full h-full">
            <div>
              <div className="m-auto md:w-[560px] mt-2">
                <div className="flex md:hidden justify-center mb-2 mt-6">
                  <img
                    src="https://cdn1.vieclam24h.vn/images/public/2024/05/17/logo_vl24h_171593792526.png"
                    className="w-[143px]"
                  />
                </div>
                <h4 className="text-[20px] md:text-[24px] leading-8 md:leading-10 text-neutral-800 md:text-left text-center">
                  Đăng ký tài khoản nhà tuyển dụng
                </h4>
              </div>

              <div className="m-auto box-register">
                <div className="relative">
                  <form noValidate autoComplete="on">
                    <div className="text-neutral-800">
                      <div>
                        <p className="font-bold text-[18px] leading-8 mb-3">
                          Thông tin tài khoản
                        </p>

                        <div className="form-row">
                          <div className="form-header required">Họ và tên</div>
                          <div className="form-body-input">
                            <input
                              type="text"
                              name="contact_name"
                              placeholder="Điền họ và tên"
                              className="w-full form-input"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-header required">
                            Số điện thoại
                          </div>
                          <div className="form-body-input">
                            <input
                              type="text"
                              name="contact_phone[0]"
                              placeholder="Điền số điện thoại"
                              className="w-full form-input"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-header required">Email</div>
                          <div className="form-body-input">
                            <input
                              type="email"
                              name="email"
                              placeholder="Điền email"
                              className="w-full form-input"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-header required">Mật khẩu</div>
                          <div className="form-body-input relative">
                            <input
                              type="password"
                              name="password"
                              placeholder="Điền mật khẩu"
                              className="w-full form-input"
                            />
                            <div className="absolute right-2 top-3 cursor-pointer select-none">
                              {/* icon SVG giữ nguyên */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="font-bold text-[18px] leading-8 mb-3 mt-6">
                        Thông tin công ty
                      </p>

                      <div className="form-row">
                        <div className="flex justify-between items-center md:flex-col md:items-start">
                          <div className="form-header required pt-0">
                            Tên công ty
                          </div>
                          <p className="font-medium text-[10px] leading-4 text-neutral-600">
                            Theo giấy phép kinh doanh
                          </p>
                        </div>
                        <div className="form-body-input">
                          <input
                            type="text"
                            name="name"
                            placeholder="Điền tên công ty"
                            className="w-full form-input"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-header required">Địa điểm</div>
                        <div className="form-body-input">
                          <div className="select-search-custom w-full h-10">
                            <div className="select-search-custom__value">
                              <input
                                tabIndex="0"
                                placeholder="Chọn tỉnh thành phố"
                                autoComplete="on"
                                className="w-full form-input cursor-pointer select-search-custom__input"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-header">Lĩnh vực hoạt động</div>
                        <div className="form-body-input">
                          <div className="select-search-custom form-input w-full render-top h-10">
                            <div className="select-search-custom__value">
                              <input
                                tabIndex="0"
                                placeholder="Chọn lĩnh vực"
                                autoComplete="on"
                                className="w-full form-input cursor-pointer select-search-custom__input"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="mt-1"></div>
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="aff_sid_access_trade"
                        className=""
                        value=""
                      />

                      <hr className="w-20 hidden md:block" />

                      <div className="flex pt-2 justify-between md:flex-row flex-col-reverse">
                        <div className="flex pt-1.5 cursor-pointer md:mt-0 mt-2 md:justify-start justify-center">
                          <p className="text-[14px] leading-6">
                            Bạn đã có tài khoản?
                          </p>
                          <div className="text-blue-500 font-semibold text-[14px] pb-0.5 pl-1">
                            <p>Đăng nhập</p>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="py-2 w-full rounded-lg outline-none bg-primary text-white text-[14px] leading-6 font-semibold h-10 px-6 mt-3 md:mt-0"
                        >
                          Hoàn thành đăng ký
                        </button>
                      </div>

                      <div className="md:hidden flex justify-center mt-4">
                        <hr className="w-20" />
                      </div>

                      <p className="md:text-[10px] text-[12px] leading-4 font-medium text-center md:text-right text-neutral-600 mt-4 md:px-0 px-10">
                        Bằng việc nhấn nút đăng ký, bạn đã đồng ý với{" "}
                        <b className="cursor-pointer text-blue-500 hover:underline">
                          Điều khoản sử dụng
                        </b>{" "}
                        của Việc Làm 24h
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[-20px] hidden md:block register-image">
          <img
            src="https://cdn1.vieclam24h.vn/images/public/2024/05/17/Login_RE_171591715144.png"
            className="w-[720px] object-none object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default registerEmployers;
