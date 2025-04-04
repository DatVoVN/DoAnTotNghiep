import SearchBar from "@/components/SearchBar";

export default function Developer() {
  return (
    <>
      <div className="bg-red-50 w-full h-[400px] relative ">
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/your-image.jpg')" }}
        ></div>
      </div>
      <div className="bg-yellow-50 h-auto absolute top-[40%] left-1/2 w-[75%] transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar />
      </div>
    </>
  );
}
