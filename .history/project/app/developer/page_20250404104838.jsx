import SearchBar from "@/components/SearchBar";

export default function Developer() {
  return (
    <>
      <div className="bg-red-50 w-full h-[350px] relative "></div>
      <div className="bg-yellow-50 h-auto absolute top-1/2 left-1/2 w-[75%] transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar />
      </div>
    </>
  );
}
