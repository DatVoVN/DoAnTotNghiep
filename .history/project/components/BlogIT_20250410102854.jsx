import React from "react";
import Blog from "./Blog";

const BlogIT = () => {
  return (
    <div className="w-full grid grid-cols-2 h-auto">
      <div className="bg-red-500 h-[100%]">
        <Blog />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-yellow-100 h-10">
          <Blog />
        </div>
        <div className="bg-yellow-500 h-10">
          <Blog />
        </div>
        <div className="bg-yellow-100 h-10">
          <Blog />
        </div>
        <div className="bg-yellow-500 h-10">Yellow</div>
      </div>
    </div>
  );
};

export default BlogIT;
