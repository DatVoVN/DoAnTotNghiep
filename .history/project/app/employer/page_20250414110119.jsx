// components/HeroSectionEmployer.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSectionEmployer = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="lg:py-12 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Tuyển dụng Nhân tài IT tại Việt Nam cùng ITviec
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Với hiểu biết sâu sắc về lĩnh vực IT và các kỹ năng chuyên môn,
            chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên IT
            tốt nhất.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/lien-he"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md text-center"
            >
              Liên hệ ngay
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Đã có tài khoản Khách hàng?{" "}
            <Link
              href="/auth/loginEmployers"
              className="font-medium underline hover:text-white transition"
            >
              Đăng nhập
            </Link>
          </p>
        </div>

        {/* XÓA h-full ở dòng dưới nếu không cần cột này cao bằng cột kia */}
        <div className="relative mt-12 lg:mt-0 flex items-center justify-center">
          <div className="relative z-10 w-full max-w-md lg:max-w-none mx-auto">
            <Image
              src="/placeholder-person-laptop.jpg"
              alt="Nhân viên IT đang làm việc"
              width={500}
              height={600}
              className="rounded-lg object-cover object-center shadow-xl"
            />
          </div>

          {/* Các floating elements */}
          <div className="absolute top-4 sm:top-8 left-[-1rem] sm:left-0 z-20 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl text-gray-800 w-48 sm:w-60 text-left animate-fade-in-up">
            <p className="text-xs text-gray-500 mb-1">Posted 2 hours ago</p>
            <h3 className="font-semibold text-sm sm:text-base mb-1">
              Java Developer
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-green-600 font-medium flex items-center gap-1">
                <i className="bi bi-check-circle-fill text-xs"></i>
                Competitive Salary
              </span>
              <span className="bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-sm shadow">
                🔥 SUPER HOT
              </span>
            </div>
          </div>

          <div className="absolute top-1/3 sm:top-1/3 left-[-2.5rem] sm:left-[-1.5rem] z-20 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl text-gray-800 w-48 sm:w-56 text-left animate-fade-in-up animation-delay-200">
            <p className="text-xs text-gray-500 mb-1">Posted 7 hours ago</p>
            <h3 className="font-semibold text-sm sm:text-base mb-1">
              PHP Developer
            </h3>
            <div className="flex justify-end">
              <span className="bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-sm shadow">
                HOT
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 right-[-1rem] sm:right-0 z-20 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl text-gray-800 w-56 sm:w-64 text-left animate-fade-in-up animation-delay-400">
            <h4 className="font-semibold mb-2 text-sm sm:text-base border-b pb-1">
              Applicants
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Image
                  src="/placeholder-avatar1.png"
                  alt="Applicant 1"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div>
                  <span className="font-medium block">Nguyen Minh Phuong</span>
                  <span className="text-gray-500 text-[11px] sm:text-xs">
                    Senior Java Engineer
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/placeholder-avatar2.png"
                  alt="Applicant 2"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div>
                  <span className="font-medium block">Tran Hoang Khanh</span>
                  <span className="text-gray-500 text-[11px] sm:text-xs">
                    Java Developer
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/placeholder-avatar3.png"
                  alt="Applicant 3"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div>
                  <span className="font-medium block">Le Thanh Tung</span>
                  <span className="text-gray-500 text-[11px] sm:text-xs">
                    PHP Developer
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nút Góp ý */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-30">
        <button className="bg-white text-red-600 px-2 py-3 rounded-l-md shadow-lg writing-mode-vertical-rl text-sm font-medium flex items-center gap-1 hover:bg-gray-100 transition">
          <span>Góp ý</span>
          <i className="bi bi-chat-dots text-base"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSectionEmployer;
