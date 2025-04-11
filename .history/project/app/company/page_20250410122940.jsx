import React from "react";

const Company = () => {
  return (
    <div className="h-auto w-full">
      <div className="border border-black h-100 w-full grid grid-cols-2 bg-gray-100">
        <div className="w-full flex justify-center items-center">
          <div className="flex gap-5 items-center">
            <div>
              <img src="/1.jpg" className="w-50 h-50" />
            </div>
            <div>
              <div>FORNATU</div>
              <div className="flex gap-5">
                <button className="bg-blue-400 p-4 rounded w-auto">
                  WRITE REVIEW
                </button>
                <button className="bg-blue-400 p-4 rounded w-auto">
                  FOLLLOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-5">
          <div className="bg-blue-400 p-4 rounded w-auto">Review</div>
          <div className="bg-blue-400 p-4 rounded w-auto">Job Number</div>
        </div>
      </div>
      <div
        className="bg-it-white box-shadow-medium border-radius-large-xl imb-5 tabs-sticky"
        data-employers--scroll-target="tabs"
      >
        <ul className="itabs justify-content-around justify-content-xl-start igap-8 igap-xl-12 ipx-5 ipx-xl-6">
          <li className="item">
            <a
              data-controller="utm-tracking"
              class="tab-link active"
              href="/companies/fortna"
            >
              Overview
            </a>
          </li>
          <li className="item">
            <a
              data-controller="utm-tracking"
              class="tab-link"
              href="/companies/fortna/review"
            >
              Reviews
              <div className="badge-counter ims-2">17</div>
            </a>
          </li>
          <li className="item">
            <a
              data-controller="utm-tracking"
              class="tab-link"
              href="/companies/fortna/articles"
            >
              Articles
            </a>
          </li>
        </ul>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Company;
