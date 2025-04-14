"use client";
import React, { useState } from "react";
// Import icons
import {
  HiOutlineDocumentSearch,
  HiOutlineFilter,
  HiOutlineTag,
  HiOutlineDownload,
  HiOutlineChevronDown,
  HiOutlineExclamationCircle,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePhoneOutgoing, // Ví dụ icon đang phỏng vấn
  HiOutlineXCircle, // Ví dụ icon không phù hợp
  HiOutlineDotsVertical, // Icon menu thêm
} from "react-icons/hi";
import { VscVmRunning } from "react-icons/vsc"; // Ví dụ icon đã tuyển

const ApplicantManagementPage = () => {
  // --- State ---
  // State cho filter tin đăng
  const [selectedJob, setSelectedJob] = useState("all"); // 'all' hoặc job ID
  // State cho filter trạng thái tuyển dụng
  const [selectedStatus, setSelectedStatus] = useState("all"); // 'all', 'pending', 'suitable', 'interviewing', 'hired', 'rejected'
  // State cho sắp xếp
  const [sortBy, setSortBy] = useState("default"); // 'default', 'newest', 'oldest', 'matchLevel'
  // State chứa dữ liệu ứng viên (hiện đang rỗng)
  const [applicants, setApplicants] = useState([]); // Mảng chứa các object ứng viên

  // --- Dữ liệu giả lập (thay bằng fetch API) ---
  const jobs = [
    { id: "all", title: "Tất cả tin đăng" },
    { id: "job123", title: "Frontend Developer (ReactJS)" },
    { id: "job456", title: "Backend Engineer (Node.js)" },
  ];

  const applicationStatuses = [
    {
      key: "all",
      label: "Tất cả",
      icon: <HiOutlineViewGrid className="h-4 w-4 mr-1.5" />,
      count: 0,
    },
    {
      key: "pending",
      label: "Chờ đánh giá",
      icon: <HiOutlineClock className="h-4 w-4 mr-1.5" />,
      count: 0,
    },
    {
      key: "suitable",
      label: "Phù hợp",
      icon: <HiOutlineCheckCircle className="h-4 w-4 mr-1.5" />,
      count: 0,
    },
    {
      key: "interviewing",
      label: "Đang phỏng vấn",
      icon: <HiOutlinePhoneOutgoing className="h-4 w-4 mr-1.5" />,
      count: 0,
    },
    {
      key: "hired",
      label: "Đã tuyển",
      icon: <VscVmRunning className="h-4 w-4 mr-1.5" />,
      count: 0,
    }, // Icon ví dụ
    {
      key: "rejected",
      label: "Không phù hợp",
      icon: <HiOutlineXCircle className="h-4 w-4 mr-1.5" />,
      count: 0,
    },
  ];

  // --- Xử lý sự kiện (ví dụ) ---
  const handleStatusClick = (statusKey) => {
    setSelectedStatus(statusKey);
    // TODO: Gọi API để lọc ứng viên theo trạng thái
  };

  // --- Component phụ cho từng dòng ứng viên (Ví dụ) ---
  const ApplicantRow = ({ applicant }) => (
    <tr className="bg-white hover:bg-gray-50">
      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
        {applicant.name}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
        {applicant.matchLevel}%
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
        {applicant.jobTitle}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
        {applicant.appliedDate}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            applicant.status === "suitable"
              ? "bg-green-100 text-green-800"
              : applicant.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : applicant.status === "interviewing"
              ? "bg-blue-100 text-blue-800"
              : applicant.status === "hired"
              ? "bg-purple-100 text-purple-800"
              : applicant.status === "rejected"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800" // Trạng thái mặc định
          }`}
        >
          {applicationStatuses.find((s) => s.key === applicant.status)?.label ||
            "Không xác định"}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium space-x-2">
        <button
          className="text-indigo-600 hover:text-indigo-900"
          title="Xem chi tiết"
        >
          <i className="bi bi-eye-fill"></i>
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          title="Thêm ghi chú"
        >
          <i className="bi bi-journal-text"></i>
        </button>
        <button className="text-red-600 hover:text-red-900" title="Từ chối">
          <i className="bi bi-x-octagon-fill"></i>
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          title="Tác vụ khác"
        >
          <HiOutlineDotsVertical className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Phần Filter trên cùng */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label
            htmlFor="jobFilter"
            className="text-sm font-medium text-gray-500 flex-shrink-0"
          >
            Lọc tin đăng:
          </label>
          <div className="relative flex-1 min-w-[250px]">
            <select
              id="jobFilter"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-10 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <HiOutlineChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 border border-indigo-200">
            <HiOutlineFilter className="h-4 w-4" />
            Lọc nâng cao
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 border border-indigo-200">
            <HiOutlineTag className="h-4 w-4" />
            Lọc thẻ
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 border border-indigo-200">
            <HiOutlineDownload className="h-4 w-4" />
            Tải danh sách
          </button>
        </div>
      </div>

      {/* Filter Trạng thái Tuyển dụng */}
      <div className="mb-4 border-b border-gray-200">
        <nav
          className="-mb-px flex space-x-6 overflow-x-auto"
          aria-label="Tabs"
        >
          {applicationStatuses.map((status) => (
            <button
              key={status.key}
              onClick={() => handleStatusClick(status.key)}
              className={`flex items-center whitespace-nowrap py-3 px-1 border-b-2 text-sm font-medium focus:outline-none ${
                selectedStatus === status.key
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {status.icon}
              {status.label}
              <span
                className={`ml-2 inline-block py-0.5 px-2 rounded-full text-xs font-medium ${
                  selectedStatus === status.key
                    ? "bg-indigo-100 text-indigo-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {status.count} {/* Thay bằng số lượng thực tế */}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Sắp xếp */}
      <div className="flex items-center justify-start mb-4">
        <label
          htmlFor="sortBy"
          className="text-sm font-medium text-gray-500 mr-2"
        >
          Sắp xếp theo:
        </label>
        <div className="relative">
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent border-none text-indigo-600 py-1 pl-1 pr-6 text-sm font-medium focus:outline-none focus:ring-0 cursor-pointer"
          >
            <option value="default">Mặc định</option>
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
            <option value="matchLevel">Mức phù hợp</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-indigo-600">
            <HiOutlineChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Bảng danh sách ứng viên */}
      <div className="overflow-x-auto shadow border-b border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tên hồ sơ
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Mức phù hợp
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tin đăng
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <button className="group inline-flex items-center">
                  Thời gian nộp{" "}
                  <HiOutlineChevronDown className="h-3 w-3 ml-1 opacity-50 group-hover:opacity-100" />
                </button>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Trạng thái
              </th>
              <th scope="col" className="relative px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applicants.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <HiOutlineDocumentSearch className="h-12 w-12 text-gray-300 mb-2" />
                    <p className="text-sm text-gray-500">
                      Chưa có ứng viên ứng tuyển
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <ApplicantRow
                applicant={{
                  id: 1,
                  name: "Nguyễn Văn A",
                  matchLevel: 85,
                  jobTitle: "Frontend Developer",
                  appliedDate: "10/05/2024",
                  status: "suitable",
                }}
              />
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center text-xs text-orange-600 bg-orange-50 p-2 rounded-md border border-orange-200">
        <HiOutlineExclamationCircle className="h-4 w-4 mr-1.5 flex-shrink-0" />
        Hồ sơ sẽ bị xóa khỏi trang hồ sơ ứng tuyển sau 12 tháng kể từ ngày nộp
      </div>
    </div>
  );
};

export default ApplicantManagementPage;
