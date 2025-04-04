import React from "react";

const Company = () => {
  return (
    <div className="w-[500px] h-[450px] border-2 border-black p-4">
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center">FORTNA</h1>
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
            </tbody>
          </table>
        </div>
        <div className="border-t-2 border-black w-full my-2"></div>
        <div className="flex justify-between items-center">
          <div className="font-bold">Ha Noi</div>
          <div className="text-blue-500 underline">View company &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
