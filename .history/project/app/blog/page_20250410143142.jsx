import Blog from "@/components/Blog/Blog";
import React from "react";

const page = () => {
  return (
    <div className="bg-white shadow-md p-3">
      <div>BLOG</div>
      <div>
        <div className="grid grid-cols-3 gap-5">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default page;
