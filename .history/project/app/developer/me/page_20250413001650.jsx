"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext"; // Import context để lấy token và user

// Helper function to format date for input type="date"
const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    // Check if date is valid before formatting
    if (isNaN(date.getTime())) {
      return "";
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};

const ProfilePage = () => {
  const { token, user: authUser } = useAuth(); // Lấy token và user ban đầu từ context
  const [candidateData, setCandidateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // State riêng cho lúc update
  const [updateError, setUpdateError] = useState(null);
  // State để lưu dữ liệu form khi đang chỉnh sửa
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    // Thêm các trường khác nếu cần chỉnh sửa
  });

  // Fetch thông tin cá nhân khi component mount hoặc token thay đổi
  useEffect(() => {
    const fetchMyInfo = async () => {
      if (!token) {
        setError("Vui lòng đăng nhập để xem thông tin.");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://localhost:8000/api/candidates/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || "Không thể lấy thông tin người dùng."
          );
        }
        setCandidateData(data.data);
      } catch (err) {
        setError(err.message);
        setCandidateData(null); // Đảm bảo không hiển thị data cũ nếu lỗi
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyInfo();
  }, [token]); // Chạy lại khi token thay đổi (ví dụ: sau khi đăng nhập)

  // --- Xử lý Chỉnh sửa ---
  const handleEditClick = () => {
    if (!candidateData) return;
    setFormData({
      fullName: candidateData.fullName || "",
      phone: candidateData.phone || "",
      gender: candidateData.gender || "",
      dateOfBirth: formatDateForInput(candidateData.dateOfBirth) || "",
      address: candidateData.address || "",
    });
    setIsEditing(true);
    setUpdateError(null); // Xóa lỗi cũ khi bắt đầu edit
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdateError(null);
    // Không cần reset formData vì lần sau edit sẽ lấy từ candidateData
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    if (!token) {
      setUpdateError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
      return;
    }
    setIsUpdating(true);
    setUpdateError(null);

    // Chuẩn bị data gửi đi (chỉ gửi những trường có trong formData)
    const updateData = { ...formData };
    // Xóa các trường rỗng hoặc không hợp lệ nếu cần, ví dụ:
    if (!updateData.phone) delete updateData.phone;
    if (!updateData.gender) delete updateData.gender;
    if (!updateData.dateOfBirth) delete updateData.dateOfBirth;
    if (!updateData.address) delete updateData.address;

    try {
      const response = await fetch("http://localhost:8000/api/candidates/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Xử lý lỗi validation từ server
        if (result.errors && Array.isArray(result.errors)) {
          const formattedErrors = result.errors
            .map((err) => `${err.field}: ${err.message}`)
            .join("\n");
          throw new Error(
            formattedErrors || result.message || "Cập nhật thất bại."
          );
        }
        throw new Error(result.message || "Cập nhật thất bại.");
      }

      // Cập nhật thành công
      setCandidateData(result.data); // Cập nhật state với dữ liệu mới từ server
      setIsEditing(false); // Thoát chế độ chỉnh sửa
    } catch (err) {
      console.error("Update failed:", err);
      setUpdateError(err.message || "Đã có lỗi xảy ra khi cập nhật.");
    } finally {
      setIsUpdating(false);
    }
  };

  // --- Sidebar Menu (giữ nguyên) ---
  const menuItems = [
    { icon: "👤", label: "Hồ sơ của tôi", active: true },
    { icon: "✨", label: "Trang trí CV" },
    { icon: "💼", label: "Quản lý việc làm", hasSubMenu: true },
    { icon: "⭐", label: "NTD bạn quan tâm", hasSubMenu: true },
    { icon: "🔔", label: "Hỗ trợ và thông báo", hasSubMenu: true },
    { icon: "⚙️", label: "Quản lý tài khoản" },
  ];

  // --- Render Loading hoặc Error ---
  if (isLoading) {
    return <div className="text-center py-10">Đang tải thông tin...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Lỗi: {error}</div>;
  }

  // --- Render Profile ---
  return (
    <div className="relative flex w-full max-w-[1366px] gap-6 sm_cv:w-full bg-[#FAFAFF] content-center mx-auto py-8 sm_cv:pt-6 px-[16px] sm_cv:px-0">
      {/* Sidebar */}
      <div
        className="hidden sm:block sticky top-3 self-start z-10 min-w-[296px] w-[296px] flex-shrink-0 h-fit shadow-md rounded-xl overflow-y-auto bg-white transition-max-height duration-300"
        style={{ maxHeight: "calc(-108px + 100vh)" }}
      >
        <div className="flex flex-col py-4 px-3 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-base font-bold text-gray-900 leading-6">
                {candidateData?.fullName || authUser?.fullName || "Ứng viên"}
              </p>
              {/* <p className="text-sm text-gray-500 line-clamp-2"></p> */}
            </div>
            <div className="flex flex-col p-3 rounded-xl gap-3 border border-gray-200 shadow-md">
              <div className="flex items-center gap-1.5 py-1 cursor-pointer">
                <span className="flex-1 text-sm text-gray-500">
                  Cho phép NTD tìm bạn
                </span>
                <div className="min-w-[40px]">
                  <div className="relative w-[38px] h-[23px] bg-gray-400 rounded-full cursor-pointer">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[2px] w-[19px] h-[19px] bg-white rounded-full shadow-md transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center w-full cursor-pointer"
              >
                <div
                  className={`flex items-center p-2 gap-2 w-full rounded-lg hover:bg-gray-100 ${
                    item.active ? "bg-purple-100" : ""
                  }`}
                >
                  <span
                    className={`text-base ${
                      item.active ? "text-purple-600" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="flex-1 text-sm text-gray-700 truncate"
                    title={item.label}
                  >
                    {item.label}
                  </span>
                  {item.hasSubMenu && (
                    <span className="text-gray-400 text-sm">›</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[calc(100%-296px-24px)] max-lg:max-w-full">
        {" "}
        {/* Adjusted max-width */}
        <div className="w-full">
          {" "}
          {/* Removed lg:min-h-screen */}
          <div className="flex flex-col gap-4">
            {/* Profile Info Section */}
            <form
              onSubmit={handleUpdateProfile}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-start gap-10 relative"
            >
              {/* Left Column (Avatar, Name, Status) */}
              <div className="flex flex-col items-center md:items-start gap-3 min-w-[40%] md:min-w-[200px]">
                {" "}
                {/* Adjusted width */}
                <div className="relative w-[80px] h-[80px]">
                  <img
                    src={candidateData?.avatarUrl || "/img/avatar.jpg"} // TODO: Thêm avatarUrl vào schema nếu cần
                    alt="avatar"
                    className="rounded-full w-full h-full object-cover"
                  />
                  {/* TODO: Nút upload avatar */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer">
                    <i className="bi bi-camera text-gray-500 text-sm"></i>
                  </div>
                </div>
                {/* Trạng thái tìm việc */}
                <div className="bg-purple-100 text-purple-600 text-sm font-medium rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer">
                  <i className="bi bi-lightning-charge-fill text-base"></i>
                  Trạng thái tìm việc?
                  <i className="bi bi-chevron-down text-xs ml-1"></i>
                </div>
                {/* Tên */}
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Họ và tên"
                    className="text-base font-semibold text-gray-900 border-b border-gray-300 focus:border-purple-500 outline-none w-full"
                    required
                  />
                ) : (
                  <h3 className="text-base font-semibold text-gray-900">
                    {candidateData?.fullName || "Chưa cập nhật"}
                  </h3>
                )}
                {/* Địa chỉ */}
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Địa chỉ hiện tại"
                    className="text-sm text-gray-700 border-b border-gray-300 focus:border-purple-500 outline-none w-full"
                  />
                ) : (
                  <p
                    className="text-sm text-blue-600 cursor-pointer"
                    onClick={handleEditClick}
                  >
                    {candidateData?.address || "Thêm địa chỉ hiện tại"}
                  </p>
                )}
              </div>

              {/* Right Column (Contact Info) */}
              <div className="flex-1 flex flex-col gap-3 w-full">
                {" "}
                {/* Increased gap */}
                {/* Email (Không cho sửa) */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="bi bi-envelope text-gray-500"></i>
                  <span>{candidateData?.email || "Không có email"}</span>
                  <i className="bi bi-patch-check-fill text-green-500"></i>
                </div>
                {/* Số điện thoại */}
                {isEditing ? (
                  <div className="flex items-center gap-2 text-sm">
                    <i className="bi bi-phone text-gray-500"></i>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại"
                      className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1"
                    />
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    onClick={handleEditClick}
                  >
                    <i className="bi bi-phone text-gray-500"></i>
                    <span>
                      {candidateData?.phone || (
                        <span className="text-purple-600">
                          Thêm số điện thoại
                        </span>
                      )}
                    </span>
                  </div>
                )}
                {/* Giới tính */}
                {isEditing ? (
                  <div className="flex items-center gap-2 text-sm">
                    <i className="bi bi-person text-gray-500"></i>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1 bg-white"
                    >
                      <option value="">Chọn giới tính</option>
                      <option value="Male">Nam</option>
                      <option value="Female">Nữ</option>
                      <option value="Other">Khác</option>
                    </select>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    onClick={handleEditClick}
                  >
                    <i className="bi bi-person text-gray-500"></i>
                    <span>
                      {candidateData?.gender || (
                        <span className="text-purple-600">Thêm giới tính</span>
                      )}
                    </span>
                  </div>
                )}
                {/* Ngày sinh */}
                {isEditing ? (
                  <div className="flex items-center gap-2 text-sm">
                    <i className="bi bi-calendar-event text-gray-500"></i>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1"
                    />
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    onClick={handleEditClick}
                  >
                    <i className="bi bi-calendar-event text-gray-500"></i>
                    <span>
                      {candidateData?.dateOfBirth ? (
                        new Date(candidateData.dateOfBirth).toLocaleDateString(
                          "vi-VN"
                        )
                      ) : (
                        <span className="text-purple-600">Thêm ngày sinh</span>
                      )}
                    </span>
                  </div>
                )}
                {/* Tình trạng hôn nhân (Ví dụ - thêm nếu có trong schema) */}
                {/*
                 {isEditing ? (...) : (
                    <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer" onClick={handleEditClick}>
                      <i className="bi bi-heart text-gray-500"></i>
                      <span>{candidateData?.maritalStatus || <span className="text-purple-600">Thêm tình trạng hôn nhân</span>}</span>
                    </div>
                 )}
                 */}
                {/* Nút Lưu/Hủy khi đang chỉnh sửa */}
                {isEditing && (
                  <div className="mt-4 flex gap-3">
                    <button
                      type="submit"
                      disabled={isUpdating}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-md text-sm font-medium disabled:opacity-70 disabled:cursor-wait"
                    >
                      {isUpdating ? "Đang lưu..." : "Lưu thay đổi"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      disabled={isUpdating}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-sm font-medium"
                    >
                      Hủy
                    </button>
                  </div>
                )}
                {/* Hiển thị lỗi cập nhật */}
                {updateError && (
                  <p className="text-sm text-red-600 mt-2">{updateError}</p>
                )}
              </div>

              {/* Nút Edit (chỉ hiển thị khi không edit) */}
              {!isEditing && (
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                  title="Chỉnh sửa thông tin"
                >
                  <i className="bi bi-pencil-square text-gray-500 text-lg"></i>
                </button>
              )}
            </form>

            {/* Phần Trạng thái tìm việc (giữ nguyên hoặc làm động tương tự) */}
            <div className="bg-purple-50 px-4 py-2 rounded-full w-max cursor-pointer flex items-center gap-2">
              <i className="bi bi-lightning-charge-fill text-purple-500 text-sm"></i>
              <span className="text-sm text-gray-600">
                Trạng thái tìm việc của bạn?
              </span>
              <i className="bi bi-chevron-down text-gray-500 text-sm"></i>
            </div>

            {/* Phần CV (Có thể tách thành component riêng) */}
            {/* TODO: Thêm logic upload/update CV ở đây */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                CV của tôi
              </h2>
              {candidateData?.cvUrl ? (
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-file-earmark-pdf-fill text-red-500 text-xl"></i>
                    <a
                      href={`http://localhost:8000${candidateData.cvUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline truncate"
                    >
                      {candidateData.cvUrl.split("/").pop()}{" "}
                    </a>
                  </div>
                  {/* TODO: Nút cập nhật/xóa CV */}
                  <button className="text-sm text-purple-600 hover:underline">
                    Thay đổi
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center relative">
                  <input
                    type="file"
                    accept=".pdf"
                    className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" /* onChange={handleCvUpload} */
                  />
                  <button className="bg-purple-100 text-purple-600 px-6 py-1.5 rounded-md flex items-center gap-2 border border-purple-200 mx-auto">
                    <i className="bi bi-upload text-purple-600"></i>
                    <span>Tải lên CV</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Hỗ trợ định dạng: pdf, tối đa 5MB
                  </p>
                </div>
              )}
            </div>

            {/* Phần Tiêu chí tìm việc (giữ nguyên hoặc làm động tương tự) */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-medium text-gray-900">
                  Tiêu chí tìm việc
                </h2>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-50 transition">
                  <i className="bi bi-pencil-square text-gray-500 text-lg"></i>
                </button>
              </div>
              <div className="border-t border-gray-100 my-2"></div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Vị trí công việc</p>
                  <p className="text-sm text-purple-600 cursor-pointer">
                    Thêm vị trí công việc
                  </p>
                </div>
                {/* Thêm các tiêu chí khác */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
