import React from "react";

const page = () => {
  const menuItems = [
    { icon: "👤", label: "Hồ sơ của tôi", active: true },
    { icon: "✨", label: "Trang trí CV" },
    { icon: "💼", label: "Quản lý việc làm", hasSubMenu: true },
    { icon: "⭐", label: "NTD bạn quan tâm", hasSubMenu: true },
    { icon: "🔔", label: "Hỗ trợ và thông báo", hasSubMenu: true },
    { icon: "⚙️", label: "Quản lý tài khoản" },
  ];
  return (
    <div className="relative flex w-full max-w-[1366px] gap-6 sm_cv:w-full bg-[#FAFAFF] content-center mx-auto py-8 sm_cv:pt-6 px-[16px] sm_cv:px-0">
      <div
        className="hidden sm:block sticky top-3 self-start z-10 min-w-[296px] w-[296px] flex-shrink-0 h-fit shadow-md rounded-xl overflow-y-auto bg-white transition-max-height duration-300"
        style={{ maxHeight: "calc(-108px + 100vh)" }}
      >
        <div className="flex flex-col py-4 px-3 gap-4">
          {/* User Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-base font-bold text-gray-900 leading-6">
                Dat Vo
              </p>
              <p className="text-sm text-gray-500 line-clamp-2"></p>
            </div>
            <div className="flex flex-col p-3 rounded-xl gap-3 border border-gray-200 shadow-md">
              <div className="flex items-center gap-1.5 py-1 cursor-pointer">
                <span className="flex-1 text-sm text-gray-500">
                  Cho phép Nhà tuyển dụng tìm bạn
                </span>
                {/* Toggle switch */}
                <div className="min-w-[40px]">
                  <div className="relative w-[38px] h-[23px] bg-gray-400 rounded-full cursor-pointer">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[2px] w-[19px] h-[19px] bg-white rounded-full shadow-md transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-1">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center w-full cursor-pointer"
              >
                <div
                  className={`flex items-center p-2 gap-2 w-full rounded-lg hover:bg-gray-100 ${
                    item.active ? "bg-purple-100" : ""
                  }`}
                >
                  <span
                    className={`text-base ${
                      item.active ? "text-purple-600" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="flex-1 text-sm text-gray-700 truncate"
                    title={item.label}
                  >
                    {item.label}
                  </span>
                  {item.hasSubMenu && (
                    <span className="text-gray-400 text-sm">›</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[calc(100%-296px)] max-lg:max-w-full">
        <div className="w-full lg:min-h-screen">
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-start gap-6 relative">
              <div className="flex flex-col items-center md:items-start gap-3 min-w-[120px]">
                <div className="relative w-[80px] h-[80px]">
                  <img
                    src="/img/avatar.jpg"
                    alt="avatar"
                    className="rounded-full w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer">
                    <i className="svicon-camera text-gray-500 text-sm"></i>
                  </div>
                </div>
                <div className="bg-purple-100 text-purple-600 text-sm font-medium rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer">
                  <i className="svicon-flash text-base"></i>
                  Trạng thái tìm việc của bạn?
                  <i className="svicon-chevron-down text-xs ml-1"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  Dat Vo
                </h3>
                <p className="text-sm text-blue-600 cursor-pointer">
                  Thêm địa chỉ hiện tại
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2 w-full ">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="svicon-envelope text-gray-500"></i>
                  <span>dat246642@gmail.com</span>
                  <i className="svicon-circle-check-s text-green-500"></i>
                </div>

                <div className="flex items-center gap-2 text-sm text-purple-600 cursor-pointer">
                  <i className="svicon-mobile text-gray-500"></i>
                  <span>Thêm số điện thoại</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-purple-600 cursor-pointer">
                  <i className="svicon-user text-gray-500"></i>
                  <span>Thêm giới tính</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-purple-600 cursor-pointer">
                  <i className="svicon-birthday-cake text-gray-500"></i>
                  <span>Thêm ngày sinh</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-purple-600 cursor-pointer">
                  <i className="svicon-rings-wedding text-gray-500"></i>
                  <span>Thêm tình trạng hôn nhân</span>
                </div>
              </div>
              <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <i className="svicon-edit-alt text-gray-500 text-lg"></i>
              </button>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-full w-max cursor-pointer flex items-center gap-2">
              <i className="svicon-bolt-s text-purple-500 text-sm"></i>
              <span className="text-sm text-gray-600">
                Trạng thái tìm việc của bạn?
              </span>
              <i className="svicon-chevron-down text-gray-500 text-sm"></i>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
