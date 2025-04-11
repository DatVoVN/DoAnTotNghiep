import React from "react";

const page = () => {
  return (
    <div className="h-auto w-full">
      <div className="w-full h-80 grid grid-cols-2 bg-gray-100 shadow-lg rounded-lg p-6">
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <div className="flex gap-6 items-center">
            <div>
              <img
                src="/1.jpg"
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">FORNATU</div>
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">
                  WRITE REVIEW
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow">
            Review
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow">
            Job Number
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl mb-5 sticky top-0 z-10 justify-center items-center p-10 mt-2">
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
              href="/company/review"
            >
              Reviews
              <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-[0.5]">
                17
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="p-2">
        <BlogIT />
      </div>
    </div>
  );
};

export default page;
