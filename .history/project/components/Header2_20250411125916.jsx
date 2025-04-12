// components/Header.js
import Link from "next/link";
import Image from "next/image"; // Optional: if you use an image logo

const Header2 = () => {
  return (
    // Sử dụng gradient giống ảnh (từ đen/xám đậm sang đỏ đậm)
    <header className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-4 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Phần logo 'it' trong vòng tròn đỏ */}
              <span className="bg-red-600 rounded-full flex items-center justify-center h-8 w-8 md:h-10 md:w-10 mr-2">
                <span className="text-white font-bold text-sm md:text-base">
                  it
                </span>
              </span>
              {/* Phần text còn lại */}
              <span className="font-semibold text-lg md:text-xl whitespace-nowrap">
                viec <span className="font-normal">Nhà Tuyển Dụng</span>
              </span>
              {/* --- Hoặc nếu dùng ảnh ---
              <Image
                src="/path/to/your/logo.svg" // Thay bằng đường dẫn logo của bạn
                alt="itviec Nhà Tuyển Dụng"
                width={150} // Điều chỉnh kích thước
                height={40}
                className="h-8 md:h-10 w-auto" // Giữ tỷ lệ
              />
              */}
            </Link>
          </div>
          {/* Navigation Section (Right Side) */}
          <nav className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/auth/loginEmployers" // Hoặc trang đăng nhập phù hợp
              className="text-sm md:text-base font-medium hover:text-gray-300 transition duration-150 ease-in-out px-3 py-2"
            >
              Đăng nhập
            </Link>
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 border-l border-gray-600 pl-4 md:pl-6">
              <button className="text-sm md:text-base font-medium text-gray-400 hover:text-white focus:outline-none">
                EN
              </button>
              <span className="text-gray-500">|</span>
              <button className="text-sm md:text-base font-bold text-white focus:outline-none">
                {" "}
                {/* Ví dụ: VI là active */}
                VI
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header2;
