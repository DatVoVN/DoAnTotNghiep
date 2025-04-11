import React from "react";

const Company = () => {
  return (
    <div>
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

        <div className=""></div>
      </div>
    </div>
  );
};

export default Company;
