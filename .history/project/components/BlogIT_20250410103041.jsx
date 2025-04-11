import React from "react";
import Blog from "./Blog";

const BlogIT = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4">
      {/* Bài lớn bên trái */}
      <div className="h-full">
        <Blog size="large" />
      </div>

      {/* 4 bài nhỏ bên phải */}
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
