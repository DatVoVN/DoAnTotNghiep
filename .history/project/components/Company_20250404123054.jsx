import React from "react";

const Company = () => {
  return (
    <div className="w-[500px] h-[450px] border-2 border-black p-4">
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center">FORTNA</h1>
        <div className="flex mb-4 items-center justify-center">
          <ul className="flex gap-3">
            <li className="bg-slate-200 rounded-2xl p-1">Oracle</li>
            <li className="bg-slate-200 rounded-2xl">Java</li>
            <li className="bg-slate-200 rounded-2xl">C++</li>
            <li className="bg-slate-200 rounded-2xl">ReactJS</li>
            <li className="bg-slate-200 rounded-2xl">Linux</li>
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
