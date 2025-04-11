import Blog from "@/components/Blog/Blog";
import React from "react";

const page = () => {
  return (
    <div className="bg-white shadow-md">
      <div>BLOG</div>
      <div>
        <div className="grid grid-cols-3">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default page;
