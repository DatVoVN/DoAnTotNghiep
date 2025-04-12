import React from "react";

const page = () => {
  return (
    <div className="relative flex w-full max-w-[1366px] gap-6 sm_cv:w-full bg-[#FAFAFF] content-center mx-auto py-8 sm_cv:pt-6 px-[16px] sm_cv:px-0">
      <div
        className="sticky top-3 self-start z-10 min-w-[296px] w-[296px] flex-shrink-0 h-fit shadow-md rounded-xl overflow-hidden overflow-y-auto transition-max-height ease-in-out duration-300 sm:hidden"
        style={{ maxHeight: "calc(-108px + 100vh)" }}
      >
        <div className="w-[296px] sm:w-full">
          <div className="flex flex-col py-4 px-3 gap-4 bg-white w-full box-border">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-900 leading-6">
                  Dat Vo
                </p>
                <p className="text-sm text-gray-500 line-clamp-2"></p>
              </div>
              <div className="flex flex-col p-3 rounded-xl gap-3 bg-white border border-gray-200 shadow-md">
                <div className="flex items-center gap-1.5 py-1 cursor-pointer">
                  <span className="flex-1 text-sm text-gray-500">
                    Cho phép Nhà tuyển dụng tìm bạn
                  </span>
                  <div className="min-w-[40px]">
                    <div className="relative rounded-full w-[38px] h-[23px] bg-gray-400 cursor-pointer transition-colors">
                      <div className="absolute top-1/2 -translate-y-1/2 left-[2px] w-[19px] h-[19px] bg-white rounded-full shadow-md transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {[
                {
                  icon: "svicon-file-user-s",
                  label: "Hồ sơ của tôi",
                  active: true,
                },
                { icon: "svicon-wand-magic-sparkles-s", label: "Trang trí CV" },
                {
                  icon: "svicon-suitcase-s",
                  label: "Quản lý việc làm",
                  hasSubMenu: true,
                },
                {
                  icon: "svicon-bookmark-star-s",
                  label: "NTD bạn quan tâm",
                  hasSubMenu: true,
                },
                {
                  icon: "svicon-bell-s",
                  label: "Hỗ trợ và thông báo",
                  hasSubMenu: true,
                },
                { icon: "svicon-user-s", label: "Quản lý tài khoản" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center w-full cursor-pointer"
                >
                  <div
                    className={`flex items-center p-2 gap-2 w-full rounded-lg hover:bg-gray-100 ${
                      item.active ? "bg-purple-100" : ""
                    }`}
                  >
                    <i
                      className={`${item.icon} text-base ${
                        item.active ? "text-purple-600" : "text-gray-500"
                      }`}
                    />
                    <div className="flex flex-1">
                      <span
                        className="text-sm text-gray-500 truncate"
                        title={item.label}
                      >
                        {item.label}
                      </span>
                    </div>
                    {item.hasSubMenu && (
                      <i className="svicon-chevron-right text-sm text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[calc(100%-296px)] max-lg:max-w-full">
        <div className="w-full lg:min-h-screen">
          <div className="flex flex-col gap-4">
            {/* Hồ sơ cá nhân */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md relative flex flex-col lg:flex-row gap-6">
              {/* Avatar */}
              <div className="relative w-[80px] h-[80px]">
                <img
                  src="/img/avatar.jpg"
                  alt="avatar"
                  className="rounded-full w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-full cursor-pointer">
                  <i className="svicon-camera text-white text-xl"></i>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  Hồ sơ của tôi
                </h2>
                <h3 className="text-lg font-semibold text-gray-900">Dat Vo</h3>
                <p className="text-sm text-purple-600 cursor-pointer">
                  Thêm địa chỉ hiện tại
                </p>

                <div className="flex items-center gap-2">
                  <i className="svicon-envelope text-gray-500"></i>
                  <span className="text-sm text-gray-600">
                    dat246642@gmail.com
                  </span>
                  <i className="svicon-circle-check-s text-green-500"></i>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <i className="svicon-mobile text-gray-500"></i>
                  <span className="text-sm text-purple-600">
                    Thêm số điện thoại
                  </span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <i className="svicon-user text-gray-500"></i>
                  <span className="text-sm text-purple-600">
                    Thêm giới tính
                  </span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <i className="svicon-birthday-cake text-gray-500"></i>
                  <span className="text-sm text-purple-600">
                    Thêm ngày sinh
                  </span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <i className="svicon-rings-wedding text-gray-500"></i>
                  <span className="text-sm text-purple-600">
                    Thêm tình trạng hôn nhân
                  </span>
                </div>
              </div>

              {/* Nút chỉnh sửa */}
              <div className="absolute top-3 right-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-50 transition">
                  <i className="svicon-edit-alt text-gray-500 text-lg"></i>
                </button>
              </div>
            </div>

            {/* Trạng thái tìm việc */}
            <div className="bg-purple-50 px-4 py-2 rounded-full w-max cursor-pointer flex items-center gap-2">
              <i className="svicon-bolt-s text-purple-500 text-sm"></i>
              <span className="text-sm text-gray-600">
                Trạng thái tìm việc của bạn?
              </span>
              <i className="svicon-chevron-down text-gray-500 text-sm"></i>
            </div>

            {/* CV của tôi */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                CV của tôi
              </h2>
              <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center relative">
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                />
                <button className="bg-purple-100 text-purple-600 px-6 py-1.5 rounded-md flex items-center gap-2 border border-purple-200">
                  <i className="svicon-upload text-purple-600"></i>
                  <span>Tải lên CV có sẵn</span>
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Hỗ trợ định dạng: doc, docx, pdf, tối đa 5MB
                </p>
              </div>
            </div>

            {/* Tiêu chí tìm việc */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-medium text-gray-900">
                  Tiêu chí tìm việc
                </h2>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-50 transition">
                  <i className="svicon-edit-alt text-gray-500 text-lg"></i>
                </button>
              </div>
              <div className="border-t border-gray-100 my-2"></div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Vị trí công việc</p>
                  <p className="text-sm text-purple-600 cursor-pointer">
                    Thêm vị trí công việc
                  </p>
                </div>
                {/* Thêm các tiêu chí khác ở đây */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
