import Company from "@/components/Company";
import SearchBar from "@/components/SearchBar";
import Tool from "@/components/Tool";

export default function Developer() {
  return (
    <>
      <div className="bg-red-50 w-full h-[500px] relative ">
        <div
          className="absolute top-0 left-0 w-full h-9/10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/1.jpg')",
          }}
        ></div>
      </div>
      <div className="bg-yellow-50 h-auto absolute top-[55%] left-1/2 w-[75%] transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar />
      </div>
      <Tool />
      <p className="text-center text-3xl font-extrabold text-blue-600 tracking-wide underline decoration-blue-300 decoration-2 underline-offset-4 mt-10 mb-4">
        COMPANY
      </p>
      <div className="grid grid-cols-3 p-2 justify-items-center items-center">
        <Company />
        <Company />
        <Company />
      </div>
    </>
  );
}
