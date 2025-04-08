import React from "react";

const Company = () => {
  return (
    <div className="w-[500px] h-[450px] border-2 border-black p-4 rounded-2xl">
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-center items-center w-full mb-4">
          <img
            src="/test.jpg"
            className="h-[140px] w-[140px] object-cover rounded-full"
            alt="Company logo"
          />
        </div>

        <p className="text-center font-bold text-2xl p-3 mt-4 text-blue-600 tracking-wide uppercase">
          COMPANY
        </p>

        <div className="flex mb-4 items-center justify-center h-[50%]">
          <ul className="flex flex-wrap gap-3 justify-center">
            <li className="bg-slate-200 rounded-2xl p-2">Oracle</li>
            <li className="bg-slate-200 rounded-2xl p-2">Java</li>
            <li className="bg-slate-200 rounded-2xl p-2">C++</li>
            <li className="bg-slate-200 rounded-2xl p-2">ReactJS</li>
            <li className="bg-slate-200 rounded-2xl p-2">Linux</li>
          </ul>
        </div>
        <div className="border-t-2 border-black w-full my-2"></div>
        <div className="flex justify-between items-center">
          <div className="font-bold">Ha Noi</div>
          <div className="text-blue-500 underline">View company &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
