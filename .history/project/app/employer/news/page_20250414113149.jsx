"use client"; // Nếu dùng Next.js App Router

import React, { useState } from "react";
// Import icons nếu cần, ví dụ từ react-icons
import {
  HiOutlinePlus,
  HiOutlineViewGrid,
  HiOutlineDocumentAdd,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineDownload,
  HiOutlineInformationCircle,
  HiOutlineDocumentSearch,
  HiOutlineChatAlt2,
} from "react-icons/hi";

const JobManagementPage = () => {
  const [showPostForm, setShowPostForm] = useState(false);

  const filterOptions = {
    status: [
      "Tất cả trạng thái",
      "Đang hiển thị",
      "Hết hạn",
      "Chờ duyệt",
      "Bị từ chối",
    ],
    type: ["Tất cả loại tin", "Tin hot", "Tin thường"],
    source: ["Tất cả nguồn tin", "Website", "App", "Khác"],
  };
  const [selectedStatus, setSelectedStatus] = useState(
    filterOptions.status?.[0] || "Tất cả trạng thái"
  );
  const [selectedType, setSelectedType] = useState(
    filterOptions.type?.[0] || "Tất cả loại tin"
  );
  const [selectedSource, setSelectedSource] = useState(
    filterOptions.source?.[0] || "Tất cả nguồn tin"
  );
  const jobData = [];

  const handleShowPostForm = () => setShowPostForm(true);
  const handleClosePostForm = () => setShowPostForm(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4 flex flex-col border-r border-gray-200 flex-shrink-0">
        <div className="mb-6">
          <button
            onClick={handleShowPostForm}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <HiOutlinePlus className="h-5 w-5" />
            Đăng tin ngay
          </button>
        </div>
        <nav className="flex-grow space-y-1">
          <button
            onClick={() => setShowPostForm(false)}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
              !showPostForm
                ? "text-indigo-700 bg-indigo-50"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
            aria-current={!showPostForm ? "page" : undefined}
          >
            <HiOutlineViewGrid className="h-5 w-5" />
            Quản lý tin đăng
          </button>
          <button
            onClick={handleShowPostForm}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
              showPostForm
                ? "text-indigo-700 bg-indigo-50"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
            aria-current={showPostForm ? "page" : undefined}
          >
            <HiOutlineDocumentAdd className="h-5 w-5" />
            Tạo tin tuyển dụng
          </button>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        {showPostForm ? (
          <div className="p-4 sm:p-6 lg:p-8">
            <PostJobForm onCancel={handleClosePostForm} />
          </div>
        ) : (
          <div className="p-6 lg:p-8">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-gray-500 mr-2 flex-shrink-0">
                  Bộ lọc:
                </span>
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm"
                  >
                    {filterOptions.status?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm"
                  >
                    {filterOptions.type?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm"
                  >
                    {filterOptions.source?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <select className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm">
                    <option>Tất cả nguồn tin</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <HiOutlineChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <button className="ml-auto flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 focus:outline-none">
                  <HiOutlineDownload className="h-4 w-4" /> Tải danh sách
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 hidden md:flex">
                <div className="w-12 flex-shrink-0 px-1 mr-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1 min-w-0 px-1 mr-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên tin đăng
                  </span>
                </div>
                <div className="w-32 flex-shrink-0 px-1 mr-4 text-right">
                  <button className="group inline-flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700">
                    Thời hạn
                    <HiOutlineChevronDown className="h-3 w-3 ml-1 opacity-50 group-hover:opacity-100" />
                  </button>
                </div>
                <div className="w-24 flex-shrink-0 px-1 mr-4 text-right">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lượt xem
                  </span>
                </div>
                <div className="w-28 flex-shrink-0 px-1 mr-4 text-right">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lượt ứng tuyển
                  </span>
                </div>
                <div className="w-28 flex-shrink-0 px-1 mr-4 text-right inline-flex items-center justify-end">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tỉ lệ phản hồi
                  </span>
                  <HiOutlineInformationCircle
                    className="h-3.5 w-3.5 text-gray-400 ml-1"
                    title="Tỉ lệ phản hồi ứng viên trong vòng 48h"
                  />
                </div>
                <div className="w-32 flex-shrink-0 px-1 text-center">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </span>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {jobData.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <HiOutlineDocumentSearch className="h-16 w-16 text-gray-300 mb-3" />
                    <p className="text-sm text-gray-500">Không có dữ liệu</p>
                  </div>
                ) : (
                  jobData.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center px-4 py-3 hover:bg-gray-50"
                    >
                      {/* Render row data */}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-blue-200">
              <HiOutlineInformationCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              <span>
                Để đảm bảo tin đăng hợp lệ, tham khảo{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Quy định duyệt tin tuyển dụng
                </a>{" "}
                tại Việc Làm 24H
              </span>
            </div>
          </div>
        )}
      </main>

      <button className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex flex-col items-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <HiOutlineChatAlt2 className="h-5 w-5 mb-0.5" />
        Tư vấn
      </button>
    </div>
  );
};

export default JobManagementPage;
