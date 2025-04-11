import React from "react";
const CompanyOverview = () => {
  return (
    <div className="d-flex flex-column flex-xl-row align-items-center align-items-xl-start ims-xl-14">
      {/* Logo box */}
      <div className="logo-box border-radius-normal text-center border-solid border-radius-normal box-shadow-medium imb-3 imb-xl-0 flex-shrink-0 order-xl-0">
        <a
          target="_blank"
          rel="nofollow"
          href="/nha-tuyen-dung/shbfinance"
          data-controller="utm-tracking"
        >
          <picture>
            <source srcSet="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL0E3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6da07af2d337672047761dc0960295d5d2606615/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/shb-finance-logo.jpg" />
            <img
              className="border-radius-normal w-100 h-100 object-fit-contain"
              src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL0E3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6da07af2d337672047761dc0960295d5d2606615/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/shb-finance-logo.jpg"
              alt="SHBFinance logo"
            />
          </picture>
        </a>
      </div>

      {/* Company Name for mobile */}
      <a
        target="_blank"
        rel="nofollow"
        href="/nha-tuyen-dung/shbfinance"
        className="text-it-black h2 imb-4 d-xl-none"
        data-controller="utm-tracking"
      >
        SHBFinance
      </a>

      {/* Ratings */}
      <div className="row imb-4 imb-xl-0 ims-xl-6 order-xl-2 flex-shrink-0">
        <div className="col-6 text-center text-nowrap">
          <div className="d-flex flex-xl-column align-items-center justify-content-center imb-1 igap-1">
            <svg className="feather-icon icon-xl text-warning-color fill">
              <use href="https://itviec.com/assets/feather-icons-sprite.svg#star" />
            </svg>
            <h2>4.9</h2>
          </div>
          <div className="text-rich-grey">Đánh giá chung</div>
          <a
            target="_blank"
            rel="nofollow"
            className="hyperlink"
            href="/nha-tuyen-dung/shbfinance/danh-gia"
            data-controller="utm-tracking"
          >
            Xem chi tiết
          </a>
        </div>

        <div className="col-6 text-center">
          <div className="d-flex flex-xl-column align-items-center justify-content-center imb-1 igap-1">
            <svg className="feather-icon icon-xl text-success-color fill">
              <use href="https://itviec.com/assets/feather-icons-sprite.svg#thumbs-up" />
            </svg>
            <h2>100%</h2>
          </div>
          <div className="text-rich-grey">Khuyến khích làm việc tại đây</div>
        </div>
      </div>

      {/* Summary */}
      <div className="border-top-solid border-none-xl ipt-4 ipt-xl-0 ims-xl-4 order-xl-1 flex-1 w-100">
        <a
          target="_blank"
          rel="nofollow"
          href="/nha-tuyen-dung/shbfinance"
          className="text-it-black h2 d-none imb-2 d-xl-block text-hover-red"
          data-controller="utm-tracking"
        >
          SHBFinance
        </a>

        <div className="d-flex">
          <p className="d-flex align-items-center">
            <svg className="feather-icon icon-sm ime-1 text-dark-grey">
              <use href="https://itviec.com/assets/feather-icons-sprite.svg#smile" />
            </svg>
          </p>
          <p className="text-truncated tiny-text text-dark-grey">
            Đánh giá nổi bật
          </p>
        </div>

        <div className="small-text text-rich-grey imt-1">
          “ Môi trường làm việc thoải mái, Sếp vui tính, không chậm lương. Mình
          làm việc ở đây được trên 1 năm, đánh giá chung là môi trường rất
          HAPPY.
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
