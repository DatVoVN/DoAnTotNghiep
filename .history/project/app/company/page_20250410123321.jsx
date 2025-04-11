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
      <div className="bg-white shadow-md rounded-xl mb-5 sticky top-0 z-10">
        <ul className="flex justify-around xl:justify-start gap-8 xl:gap-12 px-5 xl:px-6">
          <li className="list-none">
            <a
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2"
              href="/companies/fortna"
            >
              Overview
            </a>
          </li>
          <li className="list-none relative">
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors pb-2"
              href="/companies/fortna/review"
            >
              Reviews
              <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                17
              </div>
            </a>
          </li>
          <li className="list-none">
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors pb-2"
              href="/companies/fortna/articles"
            >
              Articles
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-2xl px-5 pt-6 pb-8 mb-5 xl:px-6 xl:pb-8">
        <h2 className="border-b border-dashed pb-4 text-xl font-semibold text-gray-800">
          General information
        </h2>

        {/* First row */}
        <div className="flex flex-col xl:flex-row xl:pt-4 divide-y xl:divide-y-0 xl:divide-x divide-dotted">
          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company type
            </div>
            <div className="text-base">IT Product</div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company industry
            </div>
            <div className="text-right xl:text-left">
              <div className="pl-2 md:pl-0">
                <div className="inline-flex flex-wrap">
                  Transportation, Logistics and Warehouse
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company size
            </div>
            <div className="text-base">51-150 employees</div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col xl:flex-row xl:pt-4 divide-y xl:divide-y-0 xl:divide-x divide-dotted">
          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">Country</div>
            <div className="flex items-center">
              <svg className="hidden">
                <symbol id="us-flag" viewBox="0 0 512 512"></symbol>
              </svg>
              <div className="inline-block">
                <svg className="w-5 h-5 mr-1 align-middle">
                  <use xlinkHref="#us-flag" />
                </svg>
                <span className="align-middle">United States</span>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Working days
            </div>
            <div className="text-base">Monday - Friday</div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Overtime policy
            </div>
            <div className="text-base">Extra salary for OT</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Company;
