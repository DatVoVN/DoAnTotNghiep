import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar() {
  const suggestions = [
    "Java",
    "ReactJS",
    ".NET",
    "Tester",
    "PHP",
    "Business Analyst",
    "NodeJS",
    "Manager",
  ];
  return (
    <div>
      <div
        className="flex items-center p-2 text-[#414042] bg-white border border-[#dedede] rounded h-20 gap-2 shadow-[0px_8px_24px_0px_#a09fc652] bg-gradient-to-b from-[rgba(208,208,208,0.33)] via-[rgba(255,255,255,0.5)] to-white
"
      >
        <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-md cursor-pointer w-[250px] h-15">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <span className="text-black">All Cities</span>
          <span className="ml-2 text-gray-500">▼</span>
        </div>
        <input
          type="text"
          placeholder="Enter keyword skill (Java, iOS...), job title, company..."
          className="flex-1 px-4 py-2 rounded-md border border-[#dedede] outline-none h-15"
        />
        <button className="flex items-center bg-red-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700 h-[50px]">
          <FaSearch className="mr-2" />
          <span className="font-semibold">Search</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-black font-bold">Suggestions for you:</span>
        {suggestions.map((suggestion, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-black text-white rounded-full text-sm cursor-pointer hover:bg-gray-800 transition"
          >
            {suggestion}
          </span>
        ))}
      </div>
    </div>
  );
}
