import React from "react";

const Tool = () => {
  return (
    <div className="w-full h-[300px] bg-white flex flex-col">
      <p className="text-center text-2xl my-5 font-bold">BEST TOOL</p>
      <div className="flex space-x-4 p-1 h-[80%]">
        <div className="w-1/3 p-5 h-full bg-amber-300 rounded-lg">
          Update Profile
        </div>
        <div className="w-1/3 p-5 h-full bg-amber-400 rounded-lg">
          Create CV
        </div>
        <div className="w-1/3 p-5 h-full bg-amber-500 rounded-lg">Blog</div>
      </div>
    </div>
  );
};

export default Tool;
