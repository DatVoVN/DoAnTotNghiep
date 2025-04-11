import React from "react";

const BlogIT = () => {
  return (
    <div className="w-full grid grid-cols-2 h-10">
      <div className="bg-red-500 h-">Red</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-yellow-100 h-10">Yellow Light</div>
        <div className="bg-yellow-500 h-10">Yellow</div>
        <div className="bg-yellow-100 h-10">Yellow Light</div>
        <div className="bg-yellow-500 h-10">Yellow</div>
      </div>
    </div>
  );
};

export default BlogIT;
