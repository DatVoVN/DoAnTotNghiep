"use client";
import React, { useState } from "react";
// Import icons nếu bạn dùng thư viện, ví dụ react-icons
import {
  HiOutlinePlus,
  HiOutlineInformationCircle,
  HiOutlineExternalLink,
  HiOutlineLocationMarker,
  HiCurrencyDollar,
} from "react-icons/hi";
import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiListUl,
  BiListOl,
} from "react-icons/bi"; // Ví dụ icons cho text editor

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    industry: "",
    experience: "",
    quantity: "",
    applicationDeadline: "",
    province: "",
    district: "",
    streetAddress: "",
    employmentType: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    salaryNegotiable: false,
    jobDescription: "",
    jobRequirements: "",
    benefits: "",
    skills: [], // Mảng lưu các kỹ năng
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    interviewAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTextAreaChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Logic cho rich text editor sẽ phức tạp hơn
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // TODO: Gửi formData lên API backend
    alert("Đã gửi form (xem console log)");
  };

  // --- Placeholder cho các lựa chọn ---
  const industries = [
    "Chọn ngành nghề",
    "Công nghệ thông tin",
    "Marketing",
    "Kế toán",
    "Nhân sự",
  ];
  const experiences = [
    "Chọn kinh nghiệm",
    "Chưa có kinh nghiệm",
    "Dưới 1 năm",
    "1-2 năm",
    "3-5 năm",
    "Trên 5 năm",
  ];
  const quantities = [
    "Chỉ nhập số, VD: 10",
    "1",
    "2",
    "3-5",
    "5-10",
    "Trên 10",
  ];
  const provinces = [
    "Chọn Tỉnh/Thành phố",
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
  ];
  const districts = [
    "Chọn Quận/Huyện",
    "Quận 1",
    "Quận 3",
    "Quận Ba Đình",
    "Quận Hải Châu",
  ];
  const employmentTypes = [
    "Chọn hình thức làm việc",
    "Toàn thời gian",
    "Bán thời gian",
    "Thực tập",
    "Remote",
  ];
  const levels = [
    "Chọn cấp bậc",
    "Nhân viên",
    "Trưởng nhóm",
    "Quản lý",
    "Giám đốc",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
        {/* Thông tin cơ bản */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Thông tin cơ bản
            </h2>
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              <HiOutlineInformationCircle className="h-4 w-4" />
              Hướng dẫn tạo tin
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Tiêu đề tin */}
            <div className="md:col-span-2">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tiêu đề tin tuyển dụng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Ví dụ: Tuyển dụng Lập trình viên Java"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Ngành nghề */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ngành nghề <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                id="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {industries.map((opt) => (
                  <option key={opt} value={opt === industries[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Kinh nghiệm */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kinh nghiệm <span className="text-red-500">*</span>
              </label>
              <select
                name="experience"
                id="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {experiences.map((opt) => (
                  <option key={opt} value={opt === experiences[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Số lượng tuyển */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số lượng tuyển <span className="text-red-500">*</span>
              </label>
              <select
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {quantities.map((opt) => (
                  <option key={opt} value={opt === quantities[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Hạn nộp hồ sơ */}
            <div>
              <label
                htmlFor="applicationDeadline"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hạn nộp hồ sơ <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="applicationDeadline"
                id="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-1">
            <HiOutlineLocationMarker className="h-5 w-5 text-gray-500" />
            Địa chỉ 1
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tỉnh / Thành phố <span className="text-red-500">*</span>
              </label>
              <select
                name="province"
                id="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {provinces.map((opt) => (
                  <option key={opt} value={opt === provinces[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quận / Huyện <span className="text-red-500">*</span>
              </label>
              <select
                name="district"
                id="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {districts.map((opt) => (
                  <option key={opt} value={opt === districts[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số nhà, tên đường
              </label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="VD: 23 Trần Cao Vân, phường Đa Kao"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <HiOutlinePlus className="h-4 w-4" />
            Thêm địa điểm làm việc{" "}
            <span className="text-xs text-gray-500">(Tối đa 5 địa điểm)</span>
          </button>
        </div>

        {/* Yêu cầu chung */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Yêu cầu chung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
            <div>
              <label
                htmlFor="employmentType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hình thức làm việc <span className="text-red-500">*</span>
              </label>
              <select
                name="employmentType"
                id="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {employmentTypes.map((opt) => (
                  <option
                    key={opt}
                    value={opt === employmentTypes[0] ? "" : opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cấp bậc <span className="text-red-500">*</span>
              </label>
              <select
                name="level"
                id="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {levels.map((opt) => (
                  <option key={opt} value={opt === levels[0] ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="lg:col-span-1">
              {" "}
              {/* Lương */}
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lương tối thiểu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="salaryMin"
                  id="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  min="0"
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12"
                  required={!formData.salaryNegotiable}
                  disabled={formData.salaryNegotiable}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                  Triệu
                </span>
              </div>
            </div>
            <div className="lg:col-span-1">
              <label
                htmlFor="salaryMax"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Lương tối đa <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="salaryMax"
                  id="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  min={formData.salaryMin || 0}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12"
                  required={!formData.salaryNegotiable}
                  disabled={formData.salaryNegotiable}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                  Triệu
                </span>
              </div>
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="salaryNegotiable"
                  checked={formData.salaryNegotiable}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2 focus:ring-indigo-500"
                />
                Lương thoả thuận
              </label>
            </div>
          </div>
          {/* Add requirement buttons */}
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              type="button"
              className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"
            >
              <HiOutlinePlus className="h-3 w-3" /> Yêu cầu thời gian thử việc
            </button>
            <button
              type="button"
              className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"
            >
              <HiOutlinePlus className="h-3 w-3" /> Yêu cầu bằng cấp
            </button>
            <button
              type="button"
              className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"
            >
              <HiOutlinePlus className="h-3 w-3" /> Yêu cầu giới tính
            </button>
            <button
              type="button"
              className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"
            >
              <HiOutlinePlus className="h-3 w-3" /> Yêu cầu độ tuổi
            </button>
          </div>
        </div>

        {/* Công việc chi tiết */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Công việc chi tiết
            </h2>
            <button
              type="button"
              className="text-xs text-blue-600 hover:underline"
            >
              Chọn từ tin đã tạo
            </button>
          </div>
          <div>
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mô tả công việc <span className="text-red-500">*</span>
            </label>
            {/* Placeholder for Rich Text Editor Toolbar */}
            <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50">
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <BiBold />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <BiItalic />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <BiUnderline />
              </button>
              <div className="h-4 border-l border-gray-300 mx-1"></div>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <BiListUl />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <BiListOl />
              </button>
            </div>
            <textarea
              name="jobDescription"
              id="jobDescription"
              rows={6}
              value={formData.jobDescription}
              onChange={(e) =>
                handleTextAreaChange("jobDescription", e.target.value)
              }
              placeholder="Nhập mô tả chi tiết về công việc..."
              className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical"
              required
            ></textarea>
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"
            >
              <HiOutlineExternalLink className="h-3 w-3" />
              Xem gợi ý mô tả công việc
            </a>
          </div>
        </div>

        {/* Yêu cầu công việc */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <label
            htmlFor="jobRequirements"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Yêu cầu công việc <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50">
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiBold />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiItalic />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiUnderline />
            </button>
            <div className="h-4 border-l border-gray-300 mx-1"></div>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiListUl />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiListOl />
            </button>
          </div>
          <textarea
            name="jobRequirements"
            id="jobRequirements"
            rows={6}
            value={formData.jobRequirements}
            onChange={(e) =>
              handleTextAreaChange("jobRequirements", e.target.value)
            }
            placeholder="Nhập các yêu cầu đối với ứng viên..."
            className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical"
            required
          ></textarea>
          <a
            href="#"
            className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"
          >
            <HiOutlineExternalLink className="h-3 w-3" />
            Xem gợi ý yêu cầu công việc
          </a>
        </div>

        {/* Quyền lợi */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <label
            htmlFor="benefits"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quyền lợi
          </label>
          <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50">
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiBold />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiItalic />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiUnderline />
            </button>
            <div className="h-4 border-l border-gray-300 mx-1"></div>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiListUl />
            </button>
            <button type="button" className="p-1 hover:bg-gray-200 rounded">
              <BiListOl />
            </button>
          </div>
          <textarea
            name="benefits"
            id="benefits"
            rows={6}
            value={formData.benefits}
            onChange={(e) => handleTextAreaChange("benefits", e.target.value)}
            placeholder="Nhập các quyền lợi ứng viên được hưởng..."
            className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical"
          ></textarea>
          <div className="flex justify-between items-center mt-1">
            <button
              type="button"
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <HiOutlinePlus className="h-4 w-4" /> Kỹ năng cần thiết
            </button>
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              <HiOutlineExternalLink className="h-3 w-3" />
              Xem gợi ý quyền lợi
            </a>
          </div>
        </div>

        {/* Thông tin người liên hệ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Thông tin người liên hệ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
            <div>
              <label
                htmlFor="contactName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                id="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="VD: Võ Văn Đạt"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email nhận hồ sơ <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="contactEmail"
                id="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="VD: dat246642@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contactPhone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Điện thoại <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  name="contactPhone"
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="VD: 0824480256"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
                <button
                  type="button"
                  className="text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap flex items-center gap-1"
                >
                  <HiOutlinePlus className="h-3 w-3" /> Thêm số
                </button>
              </div>
            </div>
            <div className="md:col-span-3">
              <label
                htmlFor="interviewAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Địa chỉ phỏng vấn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="interviewAddress"
                id="interviewAddress"
                value={formData.interviewAddress}
                onChange={handleChange}
                placeholder="Nhập địa chỉ nơi ứng viên sẽ đến phỏng vấn"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 sticky bottom-0">
          <div className="flex justify-end items-center gap-3">
            <span className="text-xs text-gray-500 mr-4">
              Bằng việc nhấn 'Lưu và tiếp tục', bạn xác nhận đồng ý với các{" "}
              <a href="#" className="text-blue-600 hover:underline">
                điều khoản sử dụng
              </a>{" "}
              của Vieclam24h.vn
            </span>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Xem trước
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Lưu & tiếp tục
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostJobPage;
