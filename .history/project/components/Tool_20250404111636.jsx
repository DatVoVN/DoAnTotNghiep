import React from "react";

const Tool = () => {
  return (
    <div className="w-full h-50 bg-amber-500">
      <p>BEST TOOL</p>
      <div class="flex space-x-4 p-1">
        <div class="w-1/3 p-5 bg-amber-300 rounded-lg">Update Profile</div>
        <div class="w-1/3 p-5 bg-amber-400 rounded-lg">Create CV</div>
        <div class="w-1/3 p-5 bg-amber-500 rounded-lg">Blog</div>
      </div>
    </div>
  );
};

export default Tool;
