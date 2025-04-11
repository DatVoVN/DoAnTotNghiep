import React from "react";

const CompanyCard = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-4 w-full p-3">
      <div className="w-32 h-32 border rounded-lg shadow-md flex-shrink-0 order-xl-0">
        <a href="/nha-tuyen-dung/shbfinance" target="_blank" rel="nofollow">
          <img
            src="/1.jpg"
            alt="SHBFinance Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </a>
      </div>
      <a
        href="/nha-tuyen-dung/shbfinance"
        target="_blank"
        rel="nofollow"
        className="text-xl font-semibold text-center text-black xl:hidden"
      >
        SHBFinance
      </a>

      {/* Company Info */}
      <div className="border-t xl:border-none pt-4 xl:pt-0 xl:pl-6 order-xl-1 w-full ">
        <a
          href="/nha-tuyen-dung/shbfinance"
          target="_blank"
          rel="nofollow"
          className="hidden xl:block text-xl font-semibold text-black hover:text-red-600 mb-2"
        >
          SHBFinance
        </a>
        <div className="flex items-center text-sm text-gray-700 mb-1">
          <svg className="w-4 h-4 text-gray-500 mr-2">
            <use href="https://itviec.com/assets/feather-icons-sprite.svg#smile" />
          </svg>
        </div>
        <div className="text-sm text-gray-600">
          “ Môi trường làm việc thoải mái, Sếp vui tính, không chậm lương. Mình
          làm việc ở đây được trên 1 năm, đánh giá chung là môi trường rất
          HAPPY.”
        </div>
      </div>
      <div className="flex justify-between w-full xl:w-auto gap-6 order-xl-2">
        <div className="text-center flex-1">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-1 mb-1">
            <svg
              className="w-6 h-6 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <use href="https://itviec.com/assets/feather-icons-sprite.svg#star" />
            </svg>
            <h2 className="text-xl font-bold">4.9</h2>
          </div>
          <div className="text-gray-600">Đánh giá chung</div>
          <a
            href="/nha-tuyen-dung/shbfinance/danh-gia"
            target="_blank"
            rel="nofollow"
            className="text-blue-600 hover:underline text-sm"
          >
            Xem chi tiết
          </a>
        </div>

        <div className="text-center flex-1">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-1 mb-1 ">
            <svg
              className="w-6 h-6 text-green-500 fill-current"
              viewBox="0 0 24 24"
            >
              <use href="https://itviec.com/assets/feather-icons-sprite.svg#thumbs-up" />
            </svg>
            <h2 className="text-xl font-bold">100%</h2>
          </div>
          <div className="text-gray-600">Khuyến khích làm việc tại đây</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
