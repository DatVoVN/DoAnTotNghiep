import React from "react";

const Company = () => {
  return (
    <div className="border border-black h-100 w-full">
      <div>
        <div>
          <div>
            <img src="/1.jpg" className="w-30 h-30" />
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
    </div>
  );
};

export default Company;
