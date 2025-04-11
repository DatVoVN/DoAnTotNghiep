import React from "react";
import Blog from "./Blog";

const BlogIT = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4">
      <div className="h-full">
        <Blog size="large" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogIT;
