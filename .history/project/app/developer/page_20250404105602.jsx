import SearchBar from "@/components/SearchBar";

export default function Developer() {
  return (
    <>
      <div className="bg-red-50 w-full h-[500px] relative ">
        <div
          className="absolute top-0 left-0 w-full h-3/4 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/hinh-anh-tuyen-dung-hai-huoc-vui-nhon-001_3b22f447-1748-4189-82e5-59c2ae3aac3b.jpg')",
          }}
        ></div>
      </div>
      <div className="bg-yellow-50 h-auto absolute top-[55%] left-1/2 w-[75%] transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar />
      </div>
    </>
  );
}
