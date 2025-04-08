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
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </div>

          <button className="bg-black rounded text-white p-2 mt-auto w-[70%] hover:bg-gray-800 transition">
            UPDATE CV
          </button>
        </div>

        <div className="w-1/3 p-5 h-full bg-white border border-gray-300 shadow-lg rounded-lg text-center flex flex-col items-center gap-4">
          <p className="font-bold text-2xl text-black">Create CV</p>
          <p className="h-[60%] text-gray-600 px-2">
            Generate professional IT CV with new templates – recommended by
            recruiters
          </p>
          <div className="text-black mt-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
              <path d="M13 11l1.5 6l1.5 -6" />
            </svg>
          </div>

          <button className="bg-black rounded text-white p-2 mt-auto w-[70%] hover:bg-gray-800 transition">
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
