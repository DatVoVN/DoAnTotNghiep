"use client";
import React, { useState } from "react```jsx";
import Link from 'next/link';
import {
  HiOutlinePlus,
  HiOutlineViewGrid,
  HiOutlineDocumentAdd
"use client"; // Nếu dùng Next.js App Router

import React, { useState,
  HiOutlineUsers, // <<< Thêm icon này
  HiOutline } from "react";
import Link from 'next/link';
import {
Filter,
  HiOutlineChevronDown,
  HiOutlineDownload,
  HiOutlineInformationCircle,
  HiOutlineDocumentSearch,
  Hi  HiOutlinePlus,
  HiOutlineViewGrid,
  HiOutlineDocumentAdd,
  HiOutlineUsers, // Thêm icon Users
  HiOutlineFilter,
  HiOutlineTag,
  HiOutlineChevronDown,
  HiOutlineOutlineChatAlt2,
  HiOutlineBriefcase, // <<< Icon ví dụ cho applicant table
  HiOutlineClock,     // <<< Icon ví dụ cho applicant table
  HiOutlineCheckCircle, // <<< Icon ví dụ cho applicant table
  Download,
  HiOutlineInformationCircle,
  HiOutlineDocumentSearch,
  HiOutlineChatAlt2,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePhoneOutgoing, // Ví dụ icon đangHiOutlinePhoneOutgoing, // <<< Icon ví dụ cho applicant table
  Hi phỏng vấn
  HiOutlineXCircle, // Ví dụ icon không phù hợp
  HiOutlineDotsVertical, // Icon menu thêm
} from "react-icons/hi";
import { VscVmRunning } from "react-OutlineXCircle,     // <<< Icon ví dụ cho applicant table
  HiOutlineDotsVertical,// <<< Icon ví dụ cho applicant table
} from "react-icons/hi";
import { BiBold, BiItalic, BiUnderline, BiListUl, BiListOl, BiCurrentLocation } from 'react-icons/bi'; // <<< Thêm icon nếu PostJobForm cần
icons/vsc"; // Ví dụ icon đã tuyển
import { BiBold, BiItalic, BiUnderline, BiListUl, BiListOl } from 'react-icons/bi'; // Icons cho form

// ========================================================================
// Component Form Tạo Tin Tuyển Dụng (PostJobForm)
// ========================================================================
const PostJobForm = ({ onCancel })import { VscVmRunning } from "react-icons/vsc"; // <<< Icon ví dụ cho applicant table


// ========================================================================
// Component Form Tạo Tin Tuyển Dụng (Nên đặt trong file riêng)
// ========================================================================
const PostJobForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    jobTitle: '', industry: '', experience: '', quantity: '', applicationDeadline: '',
     => {
  const [formData, setFormData] = useState({
    jobTitle: '', industry: '', experience: '', quantity: '', applicationDeadline: '',
    province: '', district: '', streetAddress: '', employmentType: '', level: '',
    salaryMin: '', salaryMax: '', salaryNegotiable: false, jobDescription: '',
    jobRequirements: '', benefits: '', skills: [], contactName: '', contactEmail: '',
    contactPhone: '', interviewAddressprovince: '', district: '', streetAddress: '', employmentType: '', level: '',
    salaryMin: '', salaryMax: '', salaryNegotiable: false, jobDescription: '',
    jobRequirements: '', benefits: '', skills: [], contactName: '', contactEmail: '',
    contactPhone: '', interviewAddress: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleTextAreaChange = => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleTextAreaChange = (name, value) => {
     setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Đã gửi form (xem console log) (name, value) => {
     setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Đã gửi form (xem console log) - Sẽ đóng form.");
    onCancel();
  };

  // Dữ liệu dropdown ví dụ
  const industries = ["Chọn ngành nghề", "Công nghệ thông tin", "Marketing", "Kế toán", "Nh - Sẽ đóng form.");
    onCancel();
  };

  // Dữ liệu ví dụ
  const industries = ["Chọn ngành nghề", "Công nghệ thông tin", "Marketing", "Kế toán", "Nhân sự"];
  const experiences = ["Chọn kinh nghiệm", "Chưa có kinh nghiệm", "Dưới 1 năm", "1-2 năm", "3-5 năm", "Trên 5 năm"];
  const quantities = ["Chỉ nhập sốân sự"];
  const experiences = ["Chọn kinh nghiệm", "Chưa có kinh nghiệm", "Dưới 1 năm", "1-2 năm", "3-5 năm", "Trên 5 năm"];
  const quantities = ["Chỉ nhập số, VD: 10", "1", "2", "3-5", "5-10", "Trên 10"];
  const provinces = ["Chọn Tỉnh/Thành phố", "Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"];
  const districts = ["Chọn Quận/Huyện", "Quận 1", "Quận 3",, VD: 10", "1", "2", "3-5", "5-10", "Trên 10"];
  const provinces = ["Chọn Tỉnh/Thành phố", "Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"];
  const districts = ["Chọn Quận/Huyện", "Quận 1", "Quận 3", "Quận Ba Đình", "Quận Hải Châu"];
  const employmentTypes = ["Chọn hình thức làm việc", "Toàn thời gian", "Bán thời gian", "Thực tập", "Remote"];
  const levels = ["Chọn cấp bậc", "Nhân viên", "Trưởng nhóm", "Quản lý", " "Quận Ba Đình", "Quận Hải Châu"];
  const employmentTypes = ["Chọn hình thức làm việc", "Toàn thời gian", "Bán thời gian", "Thực tập", "Remote"];
  const levels = ["Chọn cấp bậc", "Nhân viên", "Trưởng nhóm", "Quản lý", "Giám đốc"];

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
       {/* Thông tin cơ bản */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b pb-2"><h2 className="text-Giám đốc"];

  return (
     <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6">
       {/* Thông tin cơ bản */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">Thông tin cơ bản</h2>
            <a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineInformationCircle className="h-4 w-4"/>Hướng dẫn tạo tin</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg font-semibold text-gray-800">Thông tin cơ bản</h2><a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineInformationCircle className="h-4 w-4"/>Hướng dẫn tạo tin</a></div>
          <div className="gridx-6 gap-y-4">
            <div className="md:col-span-2">
              <label htmlFor="jobTitle-post" className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề tin tuyển dụng <span className="text-red-500">*</span></label>
              <input type="text" name="jobTitle" id="jobTitle-post" value={formData.jobTitle} onChange={handleChange} placeholder="Ví dụ: Tuyển dụng Lập trình viên grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="md:col-span-2"><label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề tin tuyển dụng <span className="text-red-500">*</span></label><input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Ví dụ: Tuyển dụng Lập trình viên Java" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-5 Java" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="industry-post" className="block text-sm font-medium text-gray-700 mb-1">Ngành nghề <span className="text-red-500">*</span></label>
              <select name="industry" id="industry-post" value={formData.industry} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-00 focus:border-indigo-500 sm:text-sm" required /></div>
            <div><label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Ngành nghề <span className="text-red-500">*</span></label><select name="industry" id="industry" value={formData.industry} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                {industries.map(opt => <option key={opt} value={opt === industries[0] ? "" : opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="experience-post" className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm <span className="text-red-500">*</span></label>
              <select name="experience" id="experience-post" value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{industries.map(opt => <option key={opt} value={opt === industries[0] ? "" : opt}>{opt}</option>)}</select></div>
            <div><label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Kinh nghiệm <span className="text-red-500">*</span></label><select name="experience" id="experience" value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{experiences.map(opt => <option key={opt} value={opt === experiences[0] ?border-indigo-500 sm:text-sm" required>
                 {experiences.map(opt => <option key={opt} value={opt === experiences[0] ? "" : opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="quantity-post" className="block text-sm font-medium text-gray-700 mb-1">Số lượng tuyển <span className="text-red-500">*</span></label>
              <select name="quantity" id="quantity-post" value={formData.quantity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                {quantities.map(opt => <option key={opt} value={opt === quantities[0] ? "" : opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="applicationDeadline-post" className="block text-sm font-medium text-gray-700 mb-1">Hạn nộp hồ sơ <span className="text-red-500">*</span></label>
              <input type="date" name="applicationDeadline" id="applicationDeadline-post" value={formData.applicationDeadline} onChange={handleChange} className="w-full px-3 py-2 border border-gray- "" : opt}>{opt}</option>)}</select></div>
            <div><label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Số lượng tuyển <span className="text-red-500">*</span></label><select name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{quantities.map(opt => <option key={opt} value={opt === quantities[0] ? "" : opt}>{opt}</option>)}</select></div>
            <div><label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700 mb-1">Hạn nộp hồ sơ <span className="text-red-500">*</span></label><input type="date" name="applicationDeadline" id="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required /></div>
          </div>
        </div>
        {/* Địa chỉ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
           <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-1"><i className="bi bi-geo-alt-fill text-gray-500"></i> Địa chỉ 1</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
              <div><label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">Tỉnh / Thành phố <span className="text-red-500">*</span></label><select name="province" id="province" value={formData.province} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{provinces.map(opt => <option key={opt} value={opt === provinces[0] ? ""300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
           <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-1"><BiCurrentLocation className="h-5 w-5 text-gray-500"/> Địa chỉ 1</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="province-post" className="block text-sm font-medium text-gray-700 mb-1">Tỉnh / Thành phố <span className="text-red-500">*</span></label>
                <select name="province" id="province-post" value={formData.province} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                   {provinces.map(opt => <option key={opt} value={opt === provinces[0] ? "" : opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="district-post" className="block text-sm font-medium text-gray-700 mb-1">Quận / Huyện <span className="text-red-500">*</span></label>
                <select name="district" id="district-post" value={formData.district} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                  {districts.map(opt => <option key={opt} value={opt === districts[0] ? "" : opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="streetAddress-post" className="block text-sm font-medium text-gray-700 mb-1">Số nhà, tên đường</label>
                <input type="text" name="streetAddress" id="streetAddress-post" value={formData.streetAddress} onChange={handleChange} placeholder="VD: 23 Trần Cao Vân, phường Đa Kao" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
           </div>
           <button type="button" className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap- : opt}>{opt}</option>)}</select></div>
              <div><label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">Quận / Huyện <span className="text-red-500">*</span></label><select name="district" id="district" value={formData.district} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{districts.map(opt => <option key={opt} value={opt === districts[0] ? "" : opt}>{opt}</option>)}</select></div>
              <div><label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Số nhà, tên đường</label><input type="text" name="streetAddress" id="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="VD: 23 Trần Cao Vân, phường Đa Kao" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div>
           </div>
           <button type="button" className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"><HiOutlinePlus className="h-4 w-4"/>Thêm địa điểm làm việc <span className="text-xs text-gray-500">(Tối đa 5 địa điểm)</span></button>
        </div>
       {/* Yêu cầu chung */}
         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text1"><HiOutlinePlus className="h-4 w-4"/>Thêm địa điểm làm việc <span className="text-xs text-gray-500">(Tối đa 5 địa điểm)</span></button>
        </div>

        {/* Yêu cầu chung */}
         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Yêu cầu chung</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
                <div>
                  <label htmlFor="employmentType-post" className="block text-sm font-medium text-gray-700 mb-1">Hình thức làm việc <span className="text-red-500">*</span></label>
                  <select name="employmentType" id="employmentType-post" value={formData.employmentType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                     {employmentTypes.map(opt => <option key={opt} value={opt === employmentTypes[0] ? "" : opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="level-post" className="block text-sm font-medium text-gray-700 mb-1">Cấp bậc <span className="text-red-500">*</span></label>
                  <select name="level" id="level-post" value={formData.level} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                    {levels.map(opt => <option key={opt} value={opt === levels[0] ? "" : opt}>{opt}</option>)}
                  </select>
                </div>
                 <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lương tối thiểu <span className="text-red-500">*</span></label>
                    <div className="relative"><input type="number" name="salaryMin" id="salaryMin-post" value={formData.salaryMin} onChange={handleChange} min="0" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12" required={!formData.salaryNegotiable} disabled={formData.salaryNegotiable}/><span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">Triệu</span></div>
                 </div>
                 <div className="lg:col-span-1">
                     <label htmlFor="salaryMax-post" className="block text-sm font-medium text-gray-700 mb-1">Lương tối đa <span className="text-red-500">*</span></label>
                     <div className="relative"><input type="number" name="salaryMax" id="salaryMax-post" value={formData.salaryMax} onChange={handleChange} min={formData.salaryMin || 0} placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-gray-800 mb-4">Yêu cầu chung</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-4">
                <div><label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">Hình thức làm việc <span className="text-red-500">*</span></label><select name="employmentType" id="employmentType" value={formData.employmentType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{employmentTypes.map(opt => <option key={opt} value={opt === employmentTypes[0] ? "" : opt}>{opt}</option>)}</select></div>
                <div><label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Cấp bậc <span className="text-red-500">*</span></label><select name="level" id="level" value={formData.level} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>{levels.map(opt => <option key={opt} value={opt === levels[0] ? "" : opt}>{opt}</option>)}</select></div>
                 <div className="lg:col-span-1"><label className="block text-sm font-medium text-gray-700 mb-1">Lương tối thiểu <span className="text-red-500">*</span></label><div className="relative"><input type="number" name="salaryMin" id="salaryMin" value={formData.salaryMin} onChange={handleChange} min="0" placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12" required={!formData.salaryNegotiable} disabled={formData.salaryNegotiable}/><span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">Triệu</span></div></div>
                 <div className="lg:col-span-1"><label htmlFor="salaryMax" className="block text-sm font-medium text-gray-700 mb-1">Lương tối đa <span className="text-red-500">*</span></label><div className="relative"><input type="number" name="salaryMax" id="salaryMax" value={formData.salaryMax} onChange={handleChange} min={formData.salaryMin || 0} placeholder="0" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-12" required={!formData.salaryNegotiable} disabled={formData.salaryNegotiable}/><span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">Triệu</span></div></div>
                 <div className="flex items-end pb-2"><label className="flex items-center text-sm text-gray-700"><input type="checkbox" name="salaryNegotiable" checked={formData.salaryNegotiable} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2 focus:ring-indigo-500"/>Lương thoả thuận</label></div>
             </div>
             <div className="flex flex-wrap gap-2 mt-2"><button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu thời gian thử việc</button><button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu bằng cấp</button><button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu giới tính</button><button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu độ tuổi</button></div>
         </div>
       {/* Công việc chi tiết */}
       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
         <div className="flex justify-between items-center mb-2"><h2 className="text-lg font-semibold text-gray-800">Công việc chi tiết</h2><button type="button" className="text-xs text-blue-600 hover:underline">Chọn từ tin đã tạo</button></div>
         <div><label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">Mô tả công việc <span className="text-red-500">*</span></label><div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p--12" required={!formData.salaryNegotiable} disabled={formData.salaryNegotiable}/><span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">Triệu</span></div>
                 </div>
                 <div className="flex items-end pb-2">
                    <label className="flex items-center text-sm text-gray-700"><input type="checkbox" name="salaryNegotiable" checked={formData.salaryNegotiable} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2 focus:ring-indigo-500"/>Lương thoả thuận</label>
                 </div>
             </div>
             <div className="flex flex-wrap gap-2 mt-2">
                 <button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu thời gian thử việc</button>
                 <button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu bằng cấp</button>
                 <button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu giới tính</button>
                 <button type="button" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1 border border-blue-200"><HiOutlinePlus className="h-3 w-3"/> Yêu cầu độ tuổi</button>
             </div>
         </div>

        {/* Công việc chi tiết */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-2"><h2 className="text-lg font-semibold text-gray-800">Công việc chi tiết</h2><button type="button" className="text-xs text-blue-600 hover:underline">Chọn từ tin đã tạo</button></div>
          <div>
             <label htmlFor="jobDescription-post" className="block text-sm font-medium text-gray-700 mb-1">Mô tả công việc <span className="text-red-500">*</span></label>
             <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListOl/></button></div>
             <textarea name="jobDescription" id="jobDescription-post" rows={6} value={formData.jobDescription} onChange={(e) => handleTextAreaChange('jobDescription', e.target.value)} placeholder="Nhập mô tả chi tiết về công việc..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical" required></textarea>
             <a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý mô tả công việc</a>
          </div>
        </div>

        {/* Yêu cầu công việc */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <label htmlFor="jobRequirements-post" className="block text-sm font-medium text-gray-700 mb-1">Yêu cầu công việc <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListOl/></button></div>
            <textarea name="jobRequirements" id="jobRequirements-post" rows={6} value={formData.jobRequirements} onChange={(e) => handleTextAreaChange('jobRequirements', e.target.value)} placeholder="Nhập các yêu cầu đối với ứng viên..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical" required></textarea>
            <a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý yêu cầu công việc</a>
        </div>

        {/* Quyền lợi */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <label htmlFor="benefits-post" className="block text-sm font-medium text-gray-700 mb-1">Quyền lợi</label>
            <div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListOl/></button></div><textarea name="jobDescription" id="jobDescription" rows={6} value={formData.jobDescription} onChange={(e) => handleTextAreaChange('jobDescription', e.target.value)} placeholder="Nhập mô tả chi tiết về công việc..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical" required></textarea><a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý mô tả công việc</a></div>
       </div>
       {/* Yêu cầu công việc */}
       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
           <label htmlFor="jobRequirements" className="block text-sm font-medium text-gray-700 mb-1">Yêu cầu công việc <span className="text-red-500">*</span></label><div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListOl/></button></div><textarea name="jobRequirements" id="jobRequirements" rows={6} value={formData.jobRequirements} onChange={(e) => handleTextAreaChange('jobRequirements', e.target.value)} placeholder="Nhập các yêu cầu đối với ứng viên..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical" required></textarea><a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 justify-end"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý yêu cầu công việc</a>
       </div>
       {/* Quyền lợi */}
       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
           <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">Quyền lợi</label><div className="flex items-center gap-2 border border-b-0 border-gray-300 p-2 rounded-t-md bg-gray-50"><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiBold/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiItalic/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiUnderline/></button><div className="h-4 border-l border-gray-300 mx-1"></div><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListUl/></button><button type="button" className="p-1 hover:bg-gray-200 rounded"><BiListOl/></button></div><textarea name="benefits" id="benefits" rows={6} value={formData.benefits} onChange={(e) => handleTextAreaChange('benefits', e.target.value)} placeholder="Nhập các quyền lợi ứng viên được hưởng..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical"></textarea><div className="flex justify-between items-center mt-1"><button type="button" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"><HiOutlinePlus className="h-4 w-4"/> Kỹ năng cần thiết</button><a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý quyền lợi</a></div>
       </div>
       {/* Thông tin người liên hệ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Thông tin người liên hệ</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                <div><label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên <span className="text-red-500">*</span></label><input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleChange} placeholder="VD: Võ Văn Đạt" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/></div>
                 <div><label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Email nhận hồ sơ <span className="text-red-500">*</span></label><input type="email" name="contactEmail" id="contactEmail" value={formData.contactEmail} onChange={handleChange} placeholder="VD: dat246642@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/></div>
                 <div><label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">Điện thoại <span className="text-red-500">*</span></label><div className="flex items-center gap-2"><input type="tel" name="contactPhone" id="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="VD: 0824480256" className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/><button type="button" className="text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap flex items-center gap-1"><HiOutlinePlus className="h-3 w-3"/> Thêm số</button></div></div>
                <div className="md:col-span-3"><label htmlFor="interviewAddress" className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ phỏng vấn <span className="text-red-500">*</span></label><input type="text" name="interviewAddress" id="interviewAddress" value={formData.interviewAddress} onChange={handleChange} placeholder="Nhập địa chỉ nơi ứng viên sẽ đến phỏng vấn" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/></div>
             </div>
        </div>
      {/* Nút cuối form */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 sticky bottom-4 mt-6 z-10">
           <div className="flex justify-end items-center gap-3">
               <span className="text-xs text-gray-500 mr-4">Bằng việc nhấn 'Lưu và tiếp tục', bạn xác nhận đồng ý với các <a href="#" className="text-blue-600 hover:underline">điều khoản sử dụng</a> của Vieclam24h.vn</span>
               <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus200 rounded"><BiListOl/></button></div>
            <textarea name="benefits" id="benefits-post" rows={6} value={formData.benefits} onChange={(e) => handleTextAreaChange('benefits', e.target.value)} placeholder="Nhập các quyền lợi ứng viên được hưởng..." className="w-full px-3 py-2 border border-gray-300 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-vertical"></textarea>
            <div className="flex justify-between items-center mt-1"><button type="button" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"><HiOutlinePlus className="h-4 w-4"/> Kỹ năng cần thiết</button><a href="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineExternalLink className="h-3 w-3"/>Xem gợi ý quyền lợi</a></div>
        </div>

        {/* Thông tin người liên hệ */}
         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
             <h2 className="text-lg font-semibold text-gray-800 mb-4">Thông tin người liên hệ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                 <div>
                    <label htmlFor="contactName-post" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên <span className="text-red-500">*</span></label>
                    <input type="text" name="contactName" id="contactName-post" value={formData.contactName} onChange={handleChange} placeholder="VD: Võ Văn Đạt" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                 </div>
                  <div>
                    <label htmlFor="contactEmail-post" className="block text-sm font-medium text-gray-700 mb-1">Email nhận hồ sơ <span className="text-red-500">*</span></label>
                    <input type="email" name="contactEmail" id="contactEmail-post" value={formData.contactEmail} onChange={handleChange} placeholder="VD: dat246642@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                 </div>
                  <div>
                     <label htmlFor="contactPhone-post" className="block text-sm font-medium text-gray-700 mb-1">Điện thoại <span className="text-red-500">*</span></label>
                     <div className="flex items-center gap-2"><input type="tel" name="contactPhone" id="contactPhone-post" value={formData.contactPhone} onChange={handleChange} placeholder="VD: 0824480256" className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/><button type="button" className="text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap flex items-center gap-1"><HiOutlinePlus className="h-3 w-3"/> Thêm số</button></div>
                 </div>
                 <div className="md:col-span-3">
                     <label htmlFor="interviewAddress-post" className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ phỏng vấn <span className="text-red-500">*</span></label>
                     <input type="text" name="interviewAddress" id="interviewAddress-post" value={formData.interviewAddress} onChange={handleChange} placeholder="Nhập địa chỉ nơi ứng viên sẽ đến phỏng vấn" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                 </div>
              </div>
         </div>

      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 sticky bottom-4 mt-6 z-10">
           <div className="flex justify-end items-center gap-3">
               <span className="text-xs text-gray-500 mr-4">Bằng việc nhấn 'Lưu và tiếp tục', bạn:ring-indigo-500">Hủy</button>
               <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Lưu & tiếp tục</button>
           </div>
       </div>
    </form>
  );
};

// ========================================================================
// Component Quản Lý Tin Đăng (JobListingManagement)
// ========================================================================
const JobListingManagement = () => {
  const filterOptions = { status: ["Tất cả trạng thái", "Đang hiển thị", "Hết hạn", "Chờ duyệt", "Bị từ chối"], type: ["Tất cả loại tin", "Tin hot", "Tin thường"], source: ["Tất cả nguồn tin", "Website", "App", "Khác"], };
  const [selectedStatus, setSelectedStatus] = useState(filterOptions.status?.[0] || 'Tất cả trạng thái');
  const [selectedType, setSelectedType] = useState(filterOptions.type?.[0] || 'Tất cả loại tin');
  const [selectedSource, setSelectedSource] = useState(filterOptions.source?.[0] || 'Tất cả nguồn tin');
  const jobData = [];

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
         <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-500 mr-2 flex-shrink-0">Bộ lọc:</span>
             <div className="relative"><select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md ... text-sm">{filterOptions.status?.map((option) => (<option key={option} value={option}>{option}</option>))}</select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div></div>
             <div className="relative"><select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md ... text-sm">{filterOptions.type?.map((option) => (<option key={option} value={option}>{option}</option>))}</select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div></div>
             <div className="relative"><select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md ... text-sm">{filterOptions.source?.map((option) => (<option key={option} value={option}>{option}</option>))}</select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div></div>
              <div className="relative"><select className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md ... text-sm"><option>Tất cả nguồn tin</option></select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div></div>
            <button className="ml-auto flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 focus:outline-none"><HiOutlineDownload className="h-4 w-4" /> Tải danh sách</button>
         </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 hidden md:flex"><div className="w-12 ..."><input type="checkbox" ... /></div><div className="flex-1 ...">Tên tin đăng</div><div className="w-32 ... text-right"><button className="group ...">Thời hạn<HiOutlineChevronDown ... /></button></div><div className="w-24 ... text-right">Lượt xem</div><div className="w-28 ... text-right">Lượt ứng tuyển</div><div className="w-28 ... text-right inline-flex ...">Tỉ lệ phản hồi<HiOutlineInformationCircle .../></div><div className="w-3 xác nhận đồng ý với các <a href="#" className="text-blue-600 hover:underline">điều khoản sử dụng</a> của Vieclam24h.vn</span>
               <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                   Hủy
               </button>
               <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                   Lưu & tiếp tục
               </button>
           </div>
       </div>
    </form>
  );
};

// ========================================================================
// Component Quản lý Tin Đăng (Nên đặt trong file riêng)
// ========================================================================
const JobListingManagement = () => {
  const filterOptions = {
    status: ["Tất cả trạng thái", "Đang hiển thị", "Hết hạn", "Chờ duyệt", "Bị từ chối"],
    type: ["Tất cả loại tin", "Tin hot", "Tin thường"],
    source: ["Tất cả nguồn tin", "Website", "App", "Khác"],
  };
  const [selectedStatus, setSelectedStatus] = useState(filterOptions.status?.[0] || 'Tất cả trạng thái');
  const [selectedType, setSelectedType] = useState(filterOptions.type?.[0] || 'Tất cả loại tin');
  const [selectedSource, setSelectedSource] = useState(filterOptions.source?.[0] || 'Tất cả nguồn tin');
  const jobData = [];

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
         <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-500 mr-2 flex-shrink-0">Bộ lọc:</span>
             <div className="relative">
               <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm">
                 {filterOptions.status?.map((option) => (<option key={option} value={option}>{option}</option>))}
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div>
             </div>
              <div className="relative">
               <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm">
                 {filterOptions.type?.map((option) => (<option key={option} value={option}>{option}</option>))}
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div>
             </div>
             <div className="relative">
               <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)} className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm">
                 {filterOptions.source?.map((option) => (<option key={option} value={option}>{option}</option>))}
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div>
             </div>
              <div className="relative">
                 <select className="appearance-none w-full sm:w-auto bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-sm">
                   <option>Tất cả nguồn tin</option>
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div>
              </div>
            <button className="ml-auto flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 focus:outline-none"><HiOutlineDownload className="h-4 w-4" /> Tải danh sách</button>
         </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 hidden md:flex">
           <div className="w-12 flex-shrink-0 px-1 mr-2"><input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" /></div>
           <div className="flex-1 min-w-0 px-1 mr-4"><span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tên tin đăng</span></div>
           <div className="w-32 flex-shrink-0 px-1 mr-4 text-right"><button className="group inline-flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-700">Thời hạn<HiOutlineChevronDown className="h-3 w-3 ml-1 opacity-50 group-hover:opacity-100" /></button></div>
           <div className="w-24 flex-shrink-0 px-1 mr-4 text-right"><span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Lượt xem</span></div>
           <div className="w-28 flex-shrink-0 px-1 mr-4 text-right"><span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Lượt ứng tuyển</span></div>
           <div className="w-28 flex-shrink-0 px-1 mr-4 text-right inline-flex items-center justify-end"><span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tỉ lệ phản hồi</span><HiOutlineInformationCircle className="h-3.5 w-3.5 text-gray-400 ml-1" title="Tỉ lệ phản hồi ứng viên trong vòng 48h"/></div>
           <div className="w-32 flex-shrink-0 px-1 text-center"><span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</span></div>
        </div>
        <div className="divide-y divide-gray-200">
          {jobData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <HiOutlineDocumentSearch className="h-16 w-16 text-gray-300 mb-3" />
              <p className="text-sm text-gray-500">Không có dữ liệu</p>
            </div>
          ) : (
             jobData.map(job => (
               <div key={job.id} className="flex items-center px-4 py-3 hover:bg-gray-50"></div>
             ))
          )}
        </div>
      </div>
       <div className="mt-6 flex items-center justify-center text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-blue-200">
         <HiOutlineInformationCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
         <span>Để đảm bảo tin đăng hợp lệ, tham khảo <a href="#" className="text-blue-600 hover:underline font-medium">Quy định duyệt tin tuyển dụng</a> tại Việc Làm 24H</span>
       </div>
    </>
  );
};

// ========================================================================
// Component Quản lý Hồ Sơ Ứng Viên (Nên đặt trong file riêng)
// ========================================================================
const ApplicantManagementPage = () => {
  const [selectedJob, setSelectedJob] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [applicants, setApplicants] = useState([]);
  const jobs = [ { id: "all", title: "Tất cả tin đăng" }, /* ... */ ];
  const applicationStatuses = [
    { key: "all", label: "Tất cả", icon: <HiOutlineViewGrid className="h-4 w-4 mr-1.5" />, count: 0 },
    { key: "pending", label: "Chờ đánh giá", icon: <HiOutlineClock className="h-4 w-4 mr-1.5" />, count: 0 },
    { key: "suitable", label: "Phù hợp", icon: <HiOutlineCheckCircle className="h-4 w-4 mr-1.5" />, count: 0 },
    { key: "interviewing", label: "Đang phỏng vấn", icon: <HiOutlinePhoneOutgoing className="h-4 w-4 mr-1.5" />, count: 0 },
    { key: "hired", label: "Đã tuyển", icon: <VscVmRunning className="h-4 w-4 mr-1.5" />, count: 0 },
    { key: "rejected", label: "Không phù hợp", icon: <HiOutlineXCircle className="h-4 w-4 mr-1.5" />, count: 0 },
  ];

  const handleStatusClick = (statusKey) => setSelectedStatus(statusKey);

  const ApplicantRow = ({ applicant }) => (
     <tr className="bg-white hover:bg-gray-50">
       <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{applicant.name}</td>
       <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">{applicant.matchLevel}%</td>
       <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{applicant.jobTitle}</td>
       <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{applicant.appliedDate}</td>
       <td className="px-4 py-3 whitespace-nowrap text-sm">
           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
               applicant.status === 'suitable' ? 'bg-green-100 text-green-800' :
               applicant.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
               applicant.status === 'interviewing' ? 'bg-blue-100 text-blue-800' :
               applicant.status === 'hired' ? 'bg-purple-100 text-purple-800' :
               applicant.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
           }`}>
               {applicationStatuses.find(s => s.key === applicant.status)?.label || 'Không xác định'}
           </span>
       </td>
       <td className="px-4 py-3 whitespace-nowrap text-2 ... text-center">Hành động</div></div>
        <div className="divide-y divide-gray-200">{jobData.length === 0 ? (<div className="flex flex-col items-center justify-center py-20 text-center"><HiOutlineDocumentSearch className="h-16 w-16 text-gray-300 mb-3" /><p className="text-sm text-gray-500">Không có dữ liệu</p></div>) : ( jobData.map(job => (<div key={job.id} className="flex items-center px-4 py-3 hover:bg-gray-50">{/* Row data */}</div>)))}</div>
      </div>
       <div className="mt-6 flex items-center justify-center text-sm ..."><HiOutlineInformationCircle className="h-5 w-5 ..."/><span>Để đảm bảo tin đăng hợp lệ... <a href="#" className="text-blue-600 ...">Quy định...</a></span></div>
    </>
  );
};

// ========================================================================
// Component Quản Lý Hồ Sơ Ứng Viên (ApplicantManagementPage)
// ========================================================================
const ApplicantManagementPage = () => {
  const [selectedJob, setSelectedJob] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [applicants, setApplicants] = useState([]);
  const jobs = [ { id: "all", title: "Tất cả tin đăng" }, { id: "job123", title: "Frontend Developer (ReactJS)" }, { id: "job456", title: "Backend Engineer (Node.js)" }, ];
  const applicationStatuses = [ { key: "all", label: "Tất cả", icon: <HiOutlineViewGrid className="h-4 w-4 mr-1.5" />, count: 0 }, { key: "pending", label: "Chờ đánh giá", icon: <HiOutlineClock className="h-4 w-4 mr-1.5" />, count: 0 }, { key: "suitable", label: "Phù hợp", icon: <HiOutlineCheckCircle className="h-4 w-4 mr-1.5" />, count: 0 }, { key: "interviewing", label: "Đang phỏng vấn", icon: <HiOutlinePhoneOutgoing className="h-4 w-4 mr-1.5" />, count: 0 }, { key: "hired", label: "Đã tuyển", icon: <VscVmRunning className="h-4 w-4 mr-1.5" />, count: 0 }, { key: "rejected", label: "Không phù hợp", icon: <HiOutlineXCircle className="h-4 w-4 mr-1.5" />, count: 0 }, ];

  const handleStatusClick = (statusKey) => setSelectedStatus(statusKey);
  const ApplicantRow = ({ applicant }) => (<tr className="bg-white hover:bg-gray-50"><td className="px-4 py-3 ...">{applicant.name}</td><td className="px-4 py-3 ... text-center">{applicant.matchLevel}%</td><td className="px-4 py-3 ...">{applicant.jobTitle}</td><td className="px-4 py-3 ...">{applicant.appliedDate}</td><td className="px-4 py-3 ..."><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ applicant.status === 'suitable' ? 'bg-green-100 text-green-800' : applicant.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : applicant.status === 'interviewing' ? 'bg-blue-100 text-blue-800' : applicant.status === 'hired' ? 'bg-purple-100 text-purple-800' : applicant.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800' }`}>{applicationStatuses.find(s => s.key === applicant.status)?.label || 'Không xác định'}</span></td><td className="px-4 py-3 ... text-right space-x-2"><button className="text-indigo-600 ..."><i className="bi bi-eye-fill"></i></button><button className="text-gray-500 ..."><i className="bi bi-journal-text"></i></button><button className="text-red-600 ..."><i className="bi bi-x-octagon-fill"></i></button><button className="text-gray-500 ..."><HiOutlineDotsVertical className="h-4 w-4"/></button></td></tr>);

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md border border-gray-200">
       <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4"><label htmlFor="jobFilter" className="text-sm font-medium text-gray-500 flex-shrink-0">Lọc tin đăng:</label><div className="relative flex-1 min-w-[250px]"><select id="jobFilter" value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-10 rounded-md ... text-sm">{jobs.map(job => (<option key={job.id} value={job.id}>{job.title}</option>))}</select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><HiOutlineChevronDown className="h-4 w-4" /></div></div></div>
          <div className="flex items-center gap-2"><button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md ..."><HiOutlineFilter className="h-4 w-4" />Lọc nâng cao</button><button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md ..."><HiOutlineTag className="h-4 w-4" />Lọc thẻ</button><button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md ..."><HiOutlineDownload className="h-4 w-4" />Tải danh sách</button></div>
       </div>
        <div className="mb-4 border-b border-gray-200">
           <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">{applicationStatuses.map((status) => (<button key={status.key} onClick={() => handleStatusClick(status.key)} className={`flex items-center whitespace-nowrap py-3 px-1 border-b-2 text-sm font-medium ... ${ selectedStatus === status.key ? 'border-indigo-500 text-indigo-600' : '...' }`}>{status.icon} {status.label} <span className={`ml-2 ... ${ selectedStatus === status.key ? 'bg-indigo-100 ...' : '...'}`}>{status.count}</span></button>))}</nav>
        </div>
         <div className="flex items-center justify-start mb-4"><label htmlFor="sortBy" className="text-sm font-medium text-gray-500 mr-2">Sắp xếp theo:</label><div className="relative"><select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-transparent border-none text-indigo-600 py-1 pl-1 pr-6 text-sm font-medium ..."><option value="default">Mặc định</option><option value="newest">Mới nhất</option><option value="oldest">Cũ nhất</option><option value="matchLevel">Mức phù hợp</option></select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-indigo-600"><HiOutlineChevronDown className="h-4 w-4" /></div></div></div>
        <div className="overflow-x-auto shadow border-b border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
             <thead className="bg-gray-50"><tr><th scope="col" className="px-4 py-3 ...">Tên hồ sơ</th><th scope="col" className="px-4 py-3 ... text-center">Mức phù hợp</th><th scope="col" className="px-4 py-3 ...">Tin đăng</th><th scope="col" className="px-4 py-3 ..."><button className="group ...">Thời gian nộp <HiOutlineChevronDown .../></button></th><th scope="col" className="px-4 py-3 ...">Trạng thái</th><th scope="col" className="relative px-4 py-3"><span className="sr-only">Actions</span></th></tr></thead>
             <tbody className="bg-white divide-y divide-gray-200">{applicants.length === 0 ? (<tr><td colSpan={6}><div className="flex flex-col items-center justify-center py-16 text-center"><HiOutlineDocumentSearch ... /><p>Chưa có ứng viên ứng tuyển</p></div></td></tr>) : (applicants.map((applicant) => (<ApplicantRow key={applicant.id} applicant={applicant} />)) /* <ApplicantRow applicant={{id: 1, name: 'Nguyễn Văn A', ...}}/> */)}</tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-center text-xs text-orange-600 bg-orange-50 p-2 rounded-md border border-orange-200"><HiOutlineExclamationCircle className="h-4 w-4 mr-1.5 ..."/>Hồ sơ sẽ bị xóa khỏi trang hồ sơ ứng tuyển sau 12 tháng kể từ ngày nộp</div>
    </div>
  );
};


// ========================================================================
// Component Layout Chính (EmployerDashboard)
// ========================================================================
const EmployerDashboard = () => {
  const [activeView, setActiveView] = useState('listing');

  const handleShowPostForm = () => setActiveView('posting');
  const handleShowListing = () => setActiveView('listing');
  const handleShowApplicants = () => setActiveView('applicants');
  const handleClosePostForm = () => setActiveView('listing');

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4 flex flex-col border-r border-gray-200 flex-shrink-0">
        <div className="mb-6">
          <button onClick={handleShowPostForm} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><HiOutlinePlus className="h-5 w-5" />Đăng tin ngay</button>
        </div>
        <nav className="flex-grow space-y-1">
          <button onClick={handleShowListing} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${ activeView === 'listing' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' }`} aria-current={activeView === 'listing' ? "page" : undefined}><HiOutlineViewGrid className="h-5 w-5" />Quản lý tin đăng</button>
          <button onClick={handleShowPostForm} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${ activeView === 'posting' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' }`} aria-current={activeView === 'posting' ? "page" : undefined}><HiOutlineDocumentAdd className="h-5 w-5" />Tạo tin tuyển dụng</button>
          <button onClick={handleShowApplicants} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left ${ activeView === 'applicants' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' }`} aria-current={activeView === 'applicants' ? "page" : undefined}><HiOutlineUsers className="h-5 w-5" />Quản lý hồ sơ</button>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {activeView === 'listing' && <JobListingManagement />}
          {activeView === 'posting' && <PostJobForm onCancel={handleClosePostForm} />}
          {activeView === 'applicants' && <ApplicantManagementPage />}
        </div>
      </main>

      <button className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex flex-col items-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><HiOutlineChatAlt2 className="h-5 w-5 mb-0.5"/>Tư vấn</button>
    </div>
  );
};

export default EmployerDashboard;