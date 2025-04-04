import React from "react";

const Company = () => {
  return (
    <div className="w-[500px] h-[450px] border-2 border-black p-4">
      <div className="w-full h-full flex flex-col">
        {/* Company Name */}
        <h1 className="text-3xl font-bold mb-6">FORTNA</h1>

        {/* Skills Table */}
        <div className="flex-1 mb-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="border border-black p-2">Oracle</td>
                <td className="border border-black p-2">Java</td>
                <td className="border border-black p-2">ReactJS</td>
                <td className="border border-black p-2">OOP</td>
                <td className="border border-black p-2">English</td>
              </tr>
              <tr>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2">Linux</td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black w-full my-2"></div>

        {/* Location and Link */}
        <div className="flex justify-between items-center">
          <div className="font-bold">Ha Noi</div>
          <div className="text-blue-500 underline">View company &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
