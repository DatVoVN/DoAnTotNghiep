"use client";
import React, { useState } from "react";
import {
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineDownload,
  HiOutlineInformationCircle,
  HiOutlineDocumentSearch,
  // Import thêm icons nếu cần cho table actions (pencil, trash, etc.)
} from "react-icons/hi";

const JobListingManagement = () => {
  // State và logic riêng của màn hình này
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
  const jobData = []; // Lấy dữ liệu jobs từ API ở đây

  return (
    <>
      {" "}
      {/* Sử dụng Fragment vì không cần div bao ngoài trong <main> */}
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-gray-500 mr-2 flex-shrink-0">
            Bộ lọc:
          </span>
          {/* Status Filter */}
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
          {/* Type Filter */}
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
          {/* Source Filter */}
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
          {/* Another Source Filter Example */}
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
      {/* Table Area */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
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
        {/* Table Body */}
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
                {/* Render row data for job listing */}
              </div>
            ))
          )}
        </div>
      </div>
      {/* Footer Note */}
      <div className="mt-6 flex items-center justify-center text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-blue-200">
        <HiOutlineInformationCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
        <span>
          Để đảm bảo tin đăng hợp lệ, tham khảo{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Quy định duyệt tin tuyển dụng
          </a>{" "}
          tại Việc Làm 24H
        </span>
      </div>
    </>
  );
};

export default JobListingManagement;
