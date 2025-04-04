import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center p-2 text-[#414042] bg-white border-[#dedede] rounded h-20">
      <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-md cursor-pointer">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <span className="text-black">All Cities</span>
        <span className="ml-2 text-gray-500">▼</span>
      </div>
      <input
        type="text"
        placeholder="Enter keyword skill (Java, iOS...), job title, company..."
        className="flex-1 mx-2 px-4 py-2 rounded-md shadow-md border outline-none"
      />
      <button className="flex items-center bg-red-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700">
        <FaSearch className="mr-2" />
        <span className="font-semibold">Search</span>
      </button>
    </div>
  );
}
