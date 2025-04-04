import React from "react";

const Tool = () => {
  return (
    <div className="w-full h-500 bg-amber-500">
      <p>BEST TOOL</p>
      <div className="flex space-x-4 p-1">
        <div className="w-1/3 p-5 h-[90%] bg-amber-300 rounded-lg">
          Update Profile
        </div>
        <div className="w-1/3 p-5 h-[90%] bg-amber-400 rounded-lg">
          Create CV
        </div>
        <div className="w-1/3 p-5 h-[90%] bg-amber-500 rounded-lg">Blog</div>
      </div>
    </div>
  );
};

export default Tool;
