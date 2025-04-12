import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-3">
      <div className="bg-primary px-12 py-8 rounded-lg bg-blue-700">
        <div className="w-full flex items-center text-sm relative flex-wrap gap-2">
          <div className="bg-white rounded-sm mr-2 w-2/5 h-12 text-gray-500 relative">
            <div className="w-full h-full flex items-center justify-center pl-4">
              <i className="svicon-search text-gray-500 text-lg pl-2 pr-4"></i>
              <input
                type="text"
                name="q"
                className="w-full focus:outline-none focus:text-black"
                placeholder="Tìm kiếm cơ hội việc làm"
              />
            </div>
            <div className="hidden w-full mt-0 bg-white absolute top-[45px] lg:top-14 left-0 rounded-lg border border-gray-200 px-4 py-2 z-[3]">
              <div className="grid grid-cols-2">
                <div className="col-span-2">
                  <div className="text-purple-600 text-base font-bold mb-2">
                    Từ khóa phổ biến
                  </div>
                  <ul>
                    {[
                      "Kế toán",
                      "marketing",
                      "Lái xe",
                      "Chăm sóc khách hàng",
                      "thực tập sinh",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="px-1 py-2 rounded hover:bg-purple-100 cursor-pointer"
                      >
                        <div className="text-gray-700 font-bold">
                          <i className="svicon-star mr-2 text-yellow-400"></i>
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-sm mr-2 h-12 w-1/4 text-black">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full px-3">
                <div className="relative">
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <i className="icon-dropdown" />
                  </div>
                  <input
                    type="text"
                    placeholder="Lọc theo nghề nghiệp"
                    className="w-full h-full border-none outline-none bg-transparent text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-sm mr-2 text-black h-12 w-48">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex items-center w-full h-full px-2 rounded-sm">
                <input
                  className="w-full h-full text-sm outline-none rounded-sm"
                  placeholder="Lọc theo tỉnh thành"
                />
                <i className="svicon-chevron-down text-sm text-primary ml-2"></i>
              </div>
            </div>
          </div>
          <div className="bg-purple-600 hover:bg-purple-700 transition rounded-sm cursor-pointer h-12 w-32">
            <button
              type="submit"
              className="w-full h-full flex items-center justify-center text-white font-semibold"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white p-4 rounded-xl border border-[#EFEFF0] shadow-none lg:shadow mb-6 mt-6">
        <div class="flex flex-col justify-between -mt-4">
          <div class="hidden md:block relative w-full mx-auto">
            <nav class="py-4">
              <ol
                class="flex items-center capitalize text-xs"
                itemscope
                itemtype="https://schema.org/BreadcrumbList"
              >
                <li
                  class="flex items-center min-w-max"
                  itemprop="itemListElement"
                  itemscope
                  itemtype="http://schema.org/ListItem"
                >
                  <a href="https://vieclam24h.vn/" itemprop="item">
                    <span itemprop="name" class="text-gray-500">
                      Trang chủ
                    </span>
                  </a>
                  <meta itemprop="position" content="1" />
                  <span class="text-gray-400 px-1">/</span>
                </li>

                <li
                  class="flex items-center sr-only"
                  itemprop="itemListElement"
                  itemscope
                  itemtype="http://schema.org/ListItem"
                >
                  <a
                    href="https://vieclam24h.vn/tim-kiem-viec-lam-nhanh"
                    itemprop="item"
                  >
                    <span itemprop="name" class="text-gray-500">
                      Tìm kiếm việc làm
                    </span>
                  </a>
                  <meta itemprop="position" content="2" />
                  <span class="text-gray-400 px-1">/</span>
                </li>

                <li class="text-gray-400 truncate" aria-current="page">
                  Tuyển dụng 18,060 việc làm mới nhất năm 2025
                </li>
              </ol>
            </nav>
          </div>
          <div class="relative text-xl lg:text-2xl lg:leading-10 -mt-3 px-0 !mb-0 mb-4 w-full lg:w-full mx-auto">
            <div class="flex items-center gap-4">
              <h1>
                Tuyển dụng <strong>18,060</strong> việc làm mới nhất năm{" "}
                <strong>2025</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
