import React from "react";

const Tool = () => {
  return (
    <div className="w-full h-[500px] bg-white flex flex-col pb-4 p-3">
      <p className="text-center text-2xl my-5 font-bold">BEST TOOL</p>
      <div className="flex space-x-4 p-1 h-[90%]">
        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center flex flex-col items-center">
          <p className="font-bold text-2xl text-black mb-2">Update Profile</p>
          <p className="text-gray-700 mb-6 text-sm text-center">
            Create an excellent profile with a well-structured format and
            specific guide
          </p>
          <div className="mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-30 h-30 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <button className="bg-black rounded text-white py-8 px-6 w-[70%]">
            UPDATE CV
          </button>
        </div>

        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center">
          <p className="font-bold text-2xl text-black">Create CV</p>
          <p className="h-[60%]">
            Generate professional IT CV with new templates - recommended by
            recruiters
          </p>
          <button className="bg-black rounded text-white p-2 mt-auto w-[70%]">
            CREATE CV
          </button>
        </div>
        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center">
          <p className="font-bold text-2xl text-black">Blog</p>
          <p className="h-[60%]">
            Updates about salary, benefits, working policies, and careers in IT
          </p>
          <button className="bg-black rounded text-white p-2 mt-auto w-[70%]">
            BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
