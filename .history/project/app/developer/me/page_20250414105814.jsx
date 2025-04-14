"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/authContext";

// Helper function to format date for input type="date"
const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};

const ProfilePage = () => {
  const { token, user: authUser } = useAuth();
  const [candidateData, setCandidateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null); // Lưu file được chọn
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState(null);
  const fileInputRef = useRef(null); // Ref để trỏ tới input file ẩn
  const [cvFile, setCvFile] = useState(null); // File CV được chọn
  const [isUploadingCv, setIsUploadingCv] = useState(false);
  const [cvError, setCvError] = useState(null);
  const cvInputRef = useRef(null); // Ref cho input CV
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });
  const [isDeletingCv, setIsDeletingCv] = useState(false);
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
        setCandidateData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyInfo();
  }, [token]);
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
    setUpdateError(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdateError(null);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!token) {
      setUpdateError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
      return;
    }
    setIsUpdating(true);
    setUpdateError(null);
    const updateData = { ...formData };
    if (!updateData.phone) delete updateData.phone;
    if (!updateData.gender) delete updateData.gender;
    if (!updateData.dateOfBirth) delete updateData.dateOfBirth;
    if (!updateData.address) delete updateData.address;
    console.log(">>> Preparing to send data:", updateData);
    try {
      const response = await fetch(
        "http://localhost:8000/api/candidates/updateInfo",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        }
      );

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
  const handleAvatarClick = () => {
    if (!isUploadingAvatar && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      if (!file.type.startsWith("image/")) {
        setAvatarError("Vui lòng chọn file hình ảnh (jpg, png, gif).");
        setAvatarFile(null);
        event.target.value = null;
        return;
      }
      // Giới hạn 5MB ví dụ
      if (file.size > 5 * 1024 * 1024) {
        setAvatarError("Kích thước ảnh không được vượt quá 5MB.");
        setAvatarFile(null);
        event.target.value = null;
        return;
      }
      setAvatarFile(file);
      setAvatarError(null);
      handleAvatarUpload(file); // Tự động upload
      event.target.value = null;
    }
  };

  const handleAvatarUpload = async (fileToUpload) => {
    if (!fileToUpload || !token) {
      setAvatarError("Không có file hoặc chưa đăng nhập.");
      return;
    }
    setIsUploadingAvatar(true);
    setAvatarError(null);

    const uploadFormData = new FormData();
    uploadFormData.append("avatar", fileToUpload);

    console.log(">>> Uploading avatar...");

    try {
      const response = await fetch(
        "http://localhost:8000/api/candidates/me/avatar",
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: uploadFormData,
        }
      );

      const responseText = await response.clone().text(); // Đọc text để debug
      console.log("<<< Raw Avatar Upload Response:", responseText);

      const contentType = response.headers.get("content-type");
      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/json")
      ) {
        console.error(
          "Avatar Upload response was not OK or not JSON. Status:",
          response.status
        );
        let errorMessage = `Lỗi ${response.status}.`;
        try {
          const errorResult = JSON.parse(responseText);
          errorMessage = errorResult.message || errorMessage;
        } catch (e) {
          errorMessage = `Lỗi ${
            response.status
          }. Server response: ${responseText.substring(0, 100)}...`;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("<<< Parsed Avatar Upload JSON result:", result);

      setCandidateData((prevData) => ({
        ...prevData,
        avatarUrl: result.avatarUrl,
      }));
      setAvatarFile(null);
      // alert("Cập nhật avatar thành công!"); // Có thể thay bằng toast
    } catch (err) {
      console.error("Avatar upload failed:", err);
      setAvatarError(err.message || "Tải ảnh lên thất bại.");
    } finally {
      setIsUploadingAvatar(false);
    }
  };
  const handleCvChangeClick = () => {
    // Kích hoạt input file CV ẩn
    if (!isUploadingCv && cvInputRef.current) {
      cvInputRef.current.click();
    }
  };

  const handleCvFileChange = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      // Chỉ chấp nhận PDF
      if (file.type !== "application/pdf") {
        setCvError("Vui lòng chọn file định dạng PDF.");
        setCvFile(null);
        event.target.value = null;
        return;
      }
      // Giới hạn 5MB ví dụ
      if (file.size > 5 * 1024 * 1024) {
        setCvError("Kích thước CV không được vượt quá 5MB.");
        setCvFile(null);
        event.target.value = null;
        return;
      }
      setCvFile(file);
      setCvError(null);
      handleCvUpload(file); // Tự động upload
      event.target.value = null;
    }
  };

  const handleCvUpload = async (fileToUpload) => {
    if (!fileToUpload || !token) {
      setCvError("Không có file hoặc chưa đăng nhập.");
      return;
    }
    setIsUploadingCv(true);
    setCvError(null);

    const uploadFormData = new FormData();
    uploadFormData.append("cv", fileToUpload); // 'cv' phải khớp với tên field multer mong đợi cho CV

    console.log(">>> Uploading CV...");

    try {
      // Gọi API update-cv
      const response = await fetch(
        "http://localhost:8000/api/candidates/update-cv",
        {
          // Endpoint cập nhật CV
          method: "PUT", // Sử dụng PUT theo route backend
          headers: { Authorization: `Bearer ${token}` },
          body: uploadFormData,
        }
      );

      const responseText = await response.clone().text();
      console.log("<<< Raw CV Upload Response:", responseText);

      const contentType = response.headers.get("content-type");
      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/json")
      ) {
        console.error(
          "CV Upload response was not OK or not JSON. Status:",
          response.status
        );
        let errorMessage = `Lỗi ${response.status}.`;
        try {
          const errorResult = JSON.parse(responseText);
          errorMessage = errorResult.message || errorMessage;
        } catch (e) {}
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("<<< Parsed CV Upload JSON result:", result);

      // Cập nhật cvUrl trong state
      setCandidateData((prevData) => ({
        ...prevData,
        cvUrl: result.cvUrl, // Giả sử API trả về cvUrl mới
      }));
      setCvFile(null);
      alert("Cập nhật CV thành công!");
    } catch (err) {
      console.error("CV upload failed:", err);
      setCvError(err.message || "Tải CV lên thất bại.");
    } finally {
      setIsUploadingCv(false);
    }
  };
  const handleDeleteCv = async () => {
    if (
      !window.confirm(
        "Bạn có chắc chắn muốn xóa CV này không? Hành động này không thể hoàn tác."
      )
    ) {
      return;
    }
    if (!token) {
      console.error("Lỗi: Không tìm thấy token xác thực để xóa CV.");
      setCvError("Lỗi xác thực. Vui lòng đăng nhập lại.");
      return;
    }
    setIsDeletingCv(true);
    setCvError(null);
    try {
      const response = await fetch(
        "http://localhost:8000/api/candidates/delete-cv",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(
          responseData.message || `Lỗi ${response.status}: Không thể xóa CV.`
        );
      }
      console.log("Server response:", responseData.message);
      setCandidateData((prevData) => {
        if (!prevData) return null;
        const { cvUrl, ...rest } = prevData;
        return rest;
      });
    } catch (error) {
      console.error("Lỗi khi xóa CV:", error);
      setCvError(error.message || "Đã xảy ra lỗi không mong muốn khi xóa CV.");
    } finally {
      setIsDeletingCv(false);
    }
  };
  const menuItems = [
    { icon: "👤", label: "Hồ sơ của tôi", active: true },
    { icon: "✨", label: "Trang trí CV" },
    { icon: "💼", label: "Quản lý việc làm", hasSubMenu: true },
    { icon: "⭐", label: "NTD bạn quan tâm", hasSubMenu: true },
    { icon: "🔔", label: "Hỗ trợ và thông báo", hasSubMenu: true },
    { icon: "⚙️", label: "Quản lý tài khoản" },
  ];
  if (isLoading) {
    return <div className="text-center py-10">Đang tải thông tin...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Lỗi: {error}</div>;
  }
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
      <div className="w-full max-w-[calc(100%-296px-24px)] max-lg:max-w-full">
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <form
              onSubmit={handleUpdateProfile}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-start gap-10 relative"
            >
              <div className="flex flex-col items-center md:items-start gap-3 min-w-[40%] md:min-w-[200px]">
                <div className="relative w-[80px] h-[80px] group">
                  <img
                    src={
                      candidateData?.avatarUrl
                        ? `http://localhost:8000${
                            candidateData.avatarUrl
                          }?${Date.now()}`
                        : "/img/avatar.jpg"
                    }
                    alt="avatar"
                    className="rounded-full w-full h-full object-cover border border-gray-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/avatar.jpg";
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-black/30 rounded-full flex items-center justify-center transition-opacity ${
                      isUploadingAvatar
                        ? "!opacity-100 cursor-wait"
                        : "opacity-0 group-hover:opacity-100 cursor-pointer"
                    }`}
                    onClick={handleAvatarClick}
                    title={
                      isUploadingAvatar
                        ? "Đang tải lên..."
                        : "Thay đổi ảnh đại diện"
                    }
                  >
                    {isUploadingAvatar ? (
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <i className="bi bi-camera text-white text-2xl"></i>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={isUploadingAvatar}
                  />
                </div>
                {avatarError && (
                  <p className="text-xs text-red-500 text-center mt-1">
                    {avatarError}
                  </p>
                )}
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
              <div className="flex-1 flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="bi bi-envelope text-gray-500"></i>
                  <span>{candidateData?.email || "Không có email"}</span>
                  <i className="bi bi-patch-check-fill text-green-500"></i>
                </div>
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
                {updateError && (
                  <p className="text-sm text-red-600 mt-2">{updateError}</p>
                )}
              </div>
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
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                CV của tôi
              </h2>
              <input
                type="file"
                accept=".pdf"
                ref={cvInputRef}
                onChange={handleCvFileChange}
                className="hidden"
                disabled={isUploadingCv || isDeletingCv}
              />
              {candidateData?.cvUrl ? (
                <div
                  className={`p-3 border border-gray-200 rounded-md ${
                    isUploadingCv || isDeletingCv ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 overflow-hidden mr-2">
                      <i className="bi bi-file-earmark-pdf-fill text-red-500 text-xl flex-shrink-0"></i>
                      <a
                        href={`http://localhost:8000${
                          candidateData.cvUrl
                        }?${Date.now()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline truncate"
                        title={candidateData.cvUrl.split("/").pop()}
                      >
                        {candidateData.cvUrl
                          .split("/")
                          .pop()
                          ?.substring(0, 30) +
                          (candidateData.cvUrl.split("/").pop()?.length > 30
                            ? "..."
                            : "")}
                      </a>
                    </div>
                    <div className="flex items-center flex-shrink-0 space-x-3">
                      <button
                        onClick={handleCvChangeClick}
                        disabled={isUploadingCv || isDeletingCv}
                        className="text-sm text-purple-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isUploadingCv ? "Đang tải..." : "Thay đổi"}
                      </button>

                      <button
                        onClick={handleDeleteCv}
                        disabled={isUploadingCv || isDeletingCv}
                        className="text-sm text-red-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDeletingCv ? "Đang xóa..." : "Xóa"}{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`border-2 border-dashed border-gray-300 p-4 rounded-md text-center relative ${
                    isUploadingCv ? "opacity-50 cursor-wait" : ""
                  }`}
                >
                  <button
                    onClick={handleCvChangeClick}
                    disabled={isUploadingCv}
                    className="bg-purple-100 text-purple-600 px-6 py-1.5 rounded-md flex items-center gap-2 border border-purple-200 mx-auto disabled:opacity-70"
                  >
                    {isUploadingCv ? (
                      <>Đang tải...</>
                    ) : (
                      <>
                        <i className="bi bi-upload text-purple-600"></i>
                        <span>Tải lên CV</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Hỗ trợ định dạng: pdf, tối đa 5MB
                  </p>
                </div>
              )}
              {cvError && (
                <p className="text-xs text-red-500 mt-2 text-center">
                  {cvError}
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
