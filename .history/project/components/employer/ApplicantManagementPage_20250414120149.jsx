"use client";
import React, { useState } from "react";
import Link from "next/link"; // Giữ lại nếu cần Link đâu đó
import {
  HiOutlinePlus,
  HiOutlineViewGrid,
  HiOutlineDocumentAdd,
  HiOutlineUsers,
  HiOutlineChatAlt2,
} from "react-icons/hi";

// Import các component con tương ứng với từng view
import JobListingManagement from "@/components/employer/JobListingManagement"; // Đặt ở đâu đó trong components
import PostJobForm from "@/components/employer/PostJobForm"; // Đặt ở đâu đó trong components
import ApplicantManagementPage from "@/components/employer/ApplicantManagementPage"; // Đặt ở đâu đó trong components

const EmployerDashboard = () => {
  // State để quản lý màn hình đang hiển thị: 'listing', 'posting', 'applicants'
  const [activeView, setActiveView] = useState("listing");

  // Hàm chuyển đổi view
  const handleShowPostForm = () => setActiveView("posting");
  const handleShowListing = () => setActiveView("listing");
  const handleShowApplicants = () => setActiveView("applicants");
  // Hàm này sẽ được truyền xuống PostJobForm để quay lại màn hình listing
  const handleClosePostForm = () => setActiveView("listing");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 flex flex-col border-r border-gray-200 flex-shrink-0">
        <div className="mb-6">
          <button
            onClick={handleShowPostForm} // Mở form đăng tin
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <HiOutlinePlus className="h-5 w-5" />
            Đăng tin ngay
          </button>
        </div>
        <nav className="flex-grow space-y-1">
          {/* Quản lý tin đăng */}
          <button
            onClick={handleShowListing}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
              activeView === "listing"
                ? "text-indigo-700 bg-indigo-50"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
            aria-current={activeView === "listing" ? "page" : undefined}
          >
            <HiOutlineViewGrid className="h-5 w-5" />
            Quản lý tin đăng
          </button>
          {/* Tạo tin tuyển dụng */}
          <button
            onClick={handleShowPostForm}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
              activeView === "posting"
                ? "text-indigo-700 bg-indigo-50"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
            aria-current={activeView === "posting" ? "page" : undefined}
          >
            <HiOutlineDocumentAdd className="h-5 w-5" />
            Tạo tin tuyển dụng
          </button>
          {/* Quản lý hồ sơ ứng tuyển */}
          <button
            onClick={handleShowApplicants}
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
              activeView === "applicants"
                ? "text-indigo-700 bg-indigo-50"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
            aria-current={activeView === "applicants" ? "page" : undefined}
          >
            <HiOutlineUsers className="h-5 w-5" />
            Quản lý hồ sơ
          </button>
        </nav>
      </aside>

      {/* Main Content - Render component con dựa trên activeView */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {activeView === "listing" && <JobListingManagement />}
          {activeView === "posting" && (
            <PostJobForm onCancel={handleClosePostForm} />
          )}
          {activeView === "applicants" && <ApplicantManagementPage />}
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex flex-col items-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <HiOutlineChatAlt2 className="h-5 w-5 mb-0.5" />
        Tư vấn
      </button>
    </div>
  );
};

export default EmployerDashboard;
