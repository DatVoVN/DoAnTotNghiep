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
      <div className="flex flex-col rounded-lg bg-white border border-[#E7E7E8] hover:border-[#2C95FF] hover:shadow-md transition">
        <div className="flex pt-2 pr-2 pl-3 gap-2">
          <figure className="bg-white rounded-md w-20 h-20 min-w-20 min-h-20">
            <img
              src="https://cdn1.vieclam24h.vn/images/employer_avatar/2021/02/17/images/161355143614.jpeg?v=220513"
              alt="Company Avatar"
              className="w-full h-full object-contain rounded-md"
            />
          </figure>
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative group">
                <h3 className="text-base text-[#414045] font-semibold leading-6 line-clamp-1 group-hover:underline cursor-pointer">
                  Thư Ký - Đi Làm Ngay
                </h3>
                <div className="absolute hidden md:block group-hover:block bg-[#414045] text-white text-xs rounded-lg px-2 py-1 bottom-[110%] left-1/2 transform -translate-x-1/2 z-10 whitespace-nowrap">
                  Thư Ký - Đi Làm Ngay
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#414045]" />
                </div>
              </div>
              <i className="svicon-heart text-xl text-[#2C95FF]" />
            </div>
            <h4 className="text-sm text-[#939295] line-clamp-1">
              Công Ty TNHH Thương Mại Dịch Vụ Điện Công Nghiệp Minh Thành
            </h4>
            <div className="flex gap-10 text-sm">
              <div className="flex items-center gap-1 text-[#2C95FF]">
                <i className="svicon-money-circle text-[#939295]" />
                <span>12 - 16 triệu</span>
              </div>
              <div className="flex items-center gap-1 text-[#414045]">
                <i className="svicon-map-marker-alt text-[#939295]" />
                <span>TP.HCM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 mt-3">
          <div className="w-full h-px bg-[#E7E7E8]" />
        </div>

        {/* Bottom tags */}
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium">
          <div className="flex items-center gap-1 text-[#EF4444]">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M4.16669 12.5C4.16669 15.725 6.77503 18.3333 10 18.3333C13.225 18.3333 15.8334 15.725 15.8334 12.5C15.8334 10.1 15.3667 8.82496 15.3667 8.82496L13.775 10.5166C13.775 10.5166 14.6584 6.94996 12.4584 4.29163C11.1917 2.75829 9.79169 1.66663 9.79169 1.66663C9.79169 1.66663 9.01669 3.67496 8.13336 5.15829C7.41669 6.34996 7.00003 7.20829 6.72503 8.99996C6.22503 8.46663 5.82503 7.73329 5.47503 6.90829C5.47503 6.90829 3.96669 9.42496 4.17503 12.4916L4.16669 12.5Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="10"
                  y1="2"
                  x2="8.93"
                  y2="18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9152" />
                  <stop offset="1" stopColor="#F7393C" />
                </linearGradient>
              </defs>
            </svg>
            <span>HOT</span>
          </div>
          <div className="flex items-center gap-1 text-white bg-purple-500 px-2 py-1 rounded-full">
            <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" />
            </svg>
            <span>Đã xác thực</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
