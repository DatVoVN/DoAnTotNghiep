import React from "react";

const Tool = () => {
  return (
    <div className="w-full h-[300px] bg-white flex flex-col pb-4">
      <p className="text-center text-2xl my-5 font-bold">BEST TOOL</p>
      <div className="flex space-x-4 p-1 h-[80%]">
        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center">
          <p className="font-bold text-2xl text-black">Update Profile</p>
          <p>
            Create an excellent profile with a well-structured format and
            specific guide
          </p>
          <button className="bg-black rounded text-white p-2 mt-auto">
            UPDATE CV
          </button>
        </div>
        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center">
          <p className="font-bold text-2xl text-black">Create CV</p>
          <p>
            Generate professional IT CV with new templates - recommended by
            recruiters
          </p>
          <button className="bg-black rounded text-white p-2 mt-auto">
            CREATE CV
          </button>
        </div>
        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center">
          <p className="font-bold text-2xl text-black">Blog</p>
          <p className="h-[60%]">
            Updates about salary, benefits, working policies, and careers in IT
          </p>
          <button className="bg-black rounded text-white p-2 mt-auto">
            BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
