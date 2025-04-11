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

      <div></div>
      <div></div>
    </div>
  );
};

export default Company;
