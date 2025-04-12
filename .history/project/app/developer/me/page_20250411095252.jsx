import React from "react";

const page = () => {
  return (
    <div
      className="relative flex w-full max-w-[1366px] gap-6 sm_cv:w-full bg-[#FAFAFF] content-center mx-auto py-8 sm_cv:pt-6 px-[16px] sm_cv:px-0
"
    >
      <div
        className="sticky top-3 self-start z-10 min-w-[296px] w-[296px] flex-shrink-0 h-fit shadow-md rounded-xl overflow-hidden overflow-y-auto transition-max-height ease-in-out duration-300 sm:hidden"
        style={{ maxHeight: "calc(-108px + 100vh)" }}
      >
        <div className="w-[296px] sm:w-full">
          <div className="flex flex-col py-4 px-3 gap-4 bg-white w-full box-border">
            {/* Tên người dùng */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-900 leading-6">
                  Dat Vo
                </p>
                <p className="text-sm text-gray-500 line-clamp-2"></p>
              </div>

              {/* Cho phép nhà tuyển dụng tìm bạn */}
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

            {/* Menu các mục */}
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
    </div>
  );
};

export default page;
