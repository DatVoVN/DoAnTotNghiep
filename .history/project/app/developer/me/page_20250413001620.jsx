"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

// Helper function (giữ nguyên)
const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  } catch (error) {
    return "";
  }
};

const ProfilePage = () => {
  const { token, user: authUser } = useAuth();
  const [candidateData, setCandidateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State cho chỉnh sửa inline
  const [editingField, setEditingField] = useState(null); // Tên trường đang sửa: 'fullName', 'phone', ... hoặc null
  const [editValue, setEditValue] = useState(""); // Giá trị tạm thời khi sửa
  const [isUpdating, setIsUpdating] = useState(false); // Loading khi đang lưu 1 trường
  const [updateError, setUpdateError] = useState(null); // Lỗi khi lưu 1 trường

  // Fetch data ban đầu (giữ nguyên)
  useEffect(() => {
    const fetchMyInfo = async () => {
      // ... (logic fetch giữ nguyên như trước) ...
       if (!token) {
        setError("Vui lòng đăng nhập để xem thông tin.");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8000/api/candidates/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Không thể lấy thông tin người dùng.");
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

  // --- Hàm xử lý chỉnh sửa Inline ---
  const handleStartEdit = (fieldName, currentValue) => {
    setEditingField(fieldName);
    // Đặt giá trị ban đầu cho input, xử lý trường hợp null/undefined
    // Đặc biệt xử lý date
    if (fieldName === 'dateOfBirth') {
        setEditValue(formatDateForInput(currentValue) || "");
    } else {
        setEditValue(currentValue || "");
    }
    setUpdateError(null); // Xóa lỗi cũ
  };

  const handleCancelEdit = () => {
    setEditingField(null);
    setEditValue("");
    setUpdateError(null);
  };

  const handleSaveEdit = async () => {
    if (!token || !editingField) return;

    setIsUpdating(true);
    setUpdateError(null);

    const fieldToUpdate = editingField;
    let valueToSend = editValue;

    // Kiểm tra và chuẩn bị dữ liệu gửi đi
    if (fieldToUpdate === 'dateOfBirth' && !valueToSend) {
        // Nếu muốn xóa ngày sinh, gửi null hoặc bỏ qua tùy logic backend
        // Ở đây ví dụ là bỏ qua nếu rỗng
         handleCancelEdit(); // Hủy nếu ngày sinh rỗng
         setIsUpdating(false);
         return;
    } else if (fieldToUpdate === 'dateOfBirth') {
         // Đảm bảo ngày hợp lệ trước khi gửi
         if (isNaN(new Date(valueToSend).getTime())) {
            setUpdateError("Định dạng ngày sinh không hợp lệ.");
            setIsUpdating(false);
            return;
         }
    }


    const updateData = { [fieldToUpdate]: valueToSend };

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
         if (result.errors && Array.isArray(result.errors)) {
             const formattedErrors = result.errors.map(err => `${err.field}: ${err.message}`).join('; ');
             throw new Error(formattedErrors || result.message || "Cập nhật thất bại.");
         }
        throw new Error(result.message || "Cập nhật thất bại.");
      }

      // Cập nhật thành công
      setCandidateData(result.data); // Cập nhật state với dữ liệu mới
      handleCancelEdit(); // Thoát chế độ chỉnh sửa cho trường này

    } catch (err) {
      console.error("Update failed:", err);
      setUpdateError(err.message || "Đã có lỗi xảy ra khi cập nhật.");
      // Không thoát edit mode để user có thể sửa lại hoặc hủy
    } finally {
      setIsUpdating(false);
    }
  };


  // --- Render Component ---
  const renderEditableField = (fieldName, label, placeholder, inputType = "text", options = null) => {
    const currentValue = candidateData?.[fieldName];
    const displayValue = fieldName === 'dateOfBirth'
      ? (currentValue ? new Date(currentValue).toLocaleDateString('vi-VN') : '')
      : currentValue;
    const isEmpty = !currentValue && currentValue !== 0; // Check for null, undefined, ""

    return (
      <div className="flex items-center gap-2 text-sm text-gray-600 py-1 min-h-[36px]"> {/* Added min-height and padding */}
        <i className={`bi ${
             fieldName === 'fullName' ? 'bi-person-badge' :
             fieldName === 'phone' ? 'bi-phone' :
             fieldName === 'gender' ? 'bi-person' :
             fieldName === 'dateOfBirth' ? 'bi-calendar-event' :
             fieldName === 'address' ? 'bi-geo-alt' :
             'bi-info-circle' // Icon mặc định
           } text-gray-500 w-4 text-center`}></i> {/* Icons and fixed width */}

        {editingField === fieldName ? (
          // --- Chế độ Chỉnh sửa ---
          <div className="flex-1 flex items-center gap-2">
            {inputType === "select" && options ? (
              <select
                name={fieldName}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1 bg-white p-1 text-sm"
              >
                <option value="">{placeholder || `Chọn ${label.toLowerCase()}`}</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            ) : (
              <input
                type={inputType}
                name={fieldName}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                placeholder={placeholder || label}
                className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1 p-1 text-sm"
                autoFocus // Tự động focus vào input
              />
            )}
            <button
              onClick={handleSaveEdit}
              disabled={isUpdating}
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-0.5 rounded text-xs disabled:opacity-70"
            >
              {isUpdating ? "..." : "Lưu"}Value }`). Xử lý thành công (cập nhật `candidateData`, set `editingField = null`) và lỗi (set `fieldError`). Cuối cùng set `isSavingField = null`.

Đây là code `ProfilePage` được cập nhật theo hướng này:

```jsx
"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    return date.toISOString().split("T")[0]; // Format YYYY-MM-DD
  } catch (error) {
    return "";
  }
};

const ProfilePage = () => {
  const { token } = useAuth();
  const [candidateData, setCandidateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State cho chỉnh sửa từng trường
  const [editingField, setEditingField] = useState(null); // Tên trường đang sửa: 'phone', 'address', etc.
  const [editValue, setEditValue] = useState("");       // Giá trị đang nhập trong ô input
  const [isSavingField, setIsSavingField] = useState(null); // Tên trường đang lưu
  const [fieldError, setFieldError] = useState(null);   // Lỗi cho trường đang lưu { field, message }

  useEffect(() => {
    const fetchMyInfo = async () => {
      if (!token) {
        setError("Vui lòng đăng nhập.");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8000/api/candidates/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Lỗi fetch data.");
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

  // Bắt đầu chỉnh sửa một trường
  const handleStartEdit = (fieldName) => {
    setEditingField(fieldName);
    // Lấy giá trị hiện tại, xử lý định dạng date nếu cần
    let currentValue = candidateData?.[fieldName] || "";
    if (fieldName === 'dateOfBirth') {
        currentValue = formatDateForInput(currentValue);
    }
    setEditValue(currentValue);
    setFieldError(null); // Xóa lỗi cũ
  };

  // Hủy chỉnh sửa
  const handleCancelEdit = () => {
    setEditingField(null);
    setEditValue("");
    setFieldError(null);
  };

  // Cập nhật giá trị đang chỉnh sửa
  const handleEditValueChange = (e) => {
    setEditValue(e.target.value);
  };

  // Lưu thay đổi cho một trường
  const handleSaveField = async (fieldName) => {
    if (!token) {
      setFieldError({ field: fieldName, message: "Hết hạn đăng nhập." });
      return;
    }
    setIsSavingField(fieldName);
    setFieldError(null);

    let valueToSave = editValue;
    // Đảm bảo gửi null nếu giá trị rỗng và trường đó cho phép null (tùy schema)
    // Ví dụ: if (!valueToSave && ['phone', 'address', 'dateOfBirth', 'gender'].includes(fieldName)) {
    //     valueToSave = null;
    // }

    try {
      const response = await fetch("http://localhost:8000/api/candidates/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [fieldName]: valueToSave }), // Chỉ gửi trường đang sửa
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.errors && Array.isArray(result.errors)
                             ? result.errors.map(err => err.message).join(', ')
                             : result.message || "Lỗi cập nhật.";
        throw new Error(errorMessage);
      }

      // Cập nhật thành công
      setCandidateData(result.data); // Cập nhật state với data mới từ server
      setEditingField(null);       // Thoát chế độ edit

    } catch (err) {
      console.error(`Save failed for ${fieldName}:`, err);
      setFieldError({ field: fieldName, message: err.message || "Lỗi cập nhật." });
    } finally {
      setIsSavingField(null);
    }
  };

  // --- Render Component ---

  if (isLoading) return <div className="text-center py-10">Đang tải...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Lỗi: {error}</div>;
  if (!candidateData) return <div className="text-center py-10">Không có dữ liệu.</div>;


  // --- Function để render từng trường (editable hoặc display) ---
  const renderField = (fieldName, label, iconClass, inputType = "text", options = null) => {
    const isCurrentlyEditing = editingField === fieldName;
    const isCurrentlySaving = isSavingField === fieldName;
    const currentFieldError = fieldError?.field === fieldName ? fieldError.message : null;
    let displayValue = candidateData?.[fieldName] || <span className="text-purple-600 italic">Thêm {label.toLowerCase()}</span>;

    // Format ngày tháng để hiển thị
    if (fieldName === 'dateOfBirth' && candidateData?.dateOfBirth) {
      displayValue = new Date(candidateData.dateOfBirth).toLocaleDateString('vi-VN');
    }

    return (
      <div className="flex flex-col gap-1"> {/* Bọc trong div để chứa lỗi */}
        <div className={`flex items-center gap-2 text-sm min-h-[32px] ${isCurrentlyEditing ? 'items-start' : 'items-center'}`}>
          <i className={`${iconClass} text-gray-500 w-4 text-center`}></i>
          {isCurrentlyEditing ? (
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
              {inputType === 'select' && options ? (
                <select
                  name={fieldName}
                  value={editValue}
                  onChange={handleEditValueChange}
                  disabled={isCurrentlySaving}
                  className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1 bg-white p-1 text-sm"
                >
                   <option value="">Chọn {label.toLowerCase()}</option>
                   {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              ) : (
                <input
                  type={inputType}
                  name={fieldName}
                  value={editValue}
                  onChange={handleEditValueChange}
                  placeholder={label}
                  disabled={isCurrentlySaving}
                  className="border-b border-gray-300 focus:border-purple-500 outline-none flex-1 p-1 text-sm"
                  // Thêm các thuộc tính khác nếu cần (ví dụ: pattern cho phone)
                />
              )}
              <div className="flex gap-1 flex-shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleSaveField(fieldName)}
                  disabled={isCurrentlySaving}
                  className="p-1 text-green-600 hover:text-green-800 disabled:opacity-50"
                  title="Lưu"
                >
                  {isCurrentlySaving ? <i className="bi bi-arrow-repeat animate-spin"></i> : <i className="bi bi-check-lg"></i>}
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  disabled={isCurrentlySaving}
                  className="p-1 text-red-600 hover:text-red-800 disabled:opacity-50"
                  title="Hủy"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          ) : (
            <>
              <span className="flex-1 text-gray-700">{displayValue}</span>
              <button
                type="button"
                onClick={() => handleStartEdit(fieldName)}
                className="p-1 text-gray-500 hover:text-purple-600"
                title={`Chỉnh sửa ${label.toLowerCase()}`}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            </>
          )}
        </div>
         {/* Hiển thị lỗi của trường này */}
        {currentFieldError && <p className="text-xs text-red-500 ml-6">{currentFieldError}</p>}
      </div>
    );
  };


  // --- JSX Chính ---
  return (
     <div className="relative flex w-full max-w-[1366px] gap-6 bg-[#FAFAFF] mx-auto py-8 px-[16px]">
      {/* Sidebar (giữ nguyên) */}
       <div
        className="hidden sm:block sticky top-3 self-start z-10 min-w-[296px] w-[296px] flex-shrink-0 h-fit shadow-md rounded-xl overflow-y-auto bg-white"
        style={{ maxHeight: "calc(-108px + 100vh)" }}
       >
         {/* ... Nội dung sidebar không đổi ... */}
         <div className="flex flex-col py-4 px-3 gap-4">
           <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-base font-bold text-gray-900 leading-6">{candidateData.fullName}</p>
            </div>
             {/* ... Phần toggle switch ... */}
             <div className="flex flex-col p-3 rounded-xl gap-3 border border-gray-200 shadow-md">
               <div className="flex items-center gap-1.5 py-1 cursor-pointer">
                 <span className="flex-1 text-sm text-gray-500">Cho phép NTD tìm bạn</span>
                 <div className="min-w-[40px]">
                   <div className="relative w-[38px] h-[23px] bg-gray-400 rounded-full cursor-pointer">
                     <div className="absolute top-1/2 -translate-y-1/2 left-[2px] w-[19px] h-[19px] bg-white rounded-full shadow-md transition-all" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* ... Menu items ... */}
           <div className="flex flex-col gap-1">
             {menuItems.map((item, idx) => (
               <div key={idx} className="flex items-center w-full cursor-pointer">
                 <div className={`flex items-center p-2 gap-2 w-full rounded-lg hover:bg-gray-100 ${item.active ? "bg-purple-100" : ""}`}>
                   <span className={`text-base ${ item.active ? "text-purple-600" : "text-gray-500"}`}>{item.icon}</span>
                   <span className="flex-1 text-sm text-gray-700 truncate" title={item.label}>{item.label}</span>
                   {item.hasSubMenu && (<span className="text-gray-400 text-sm">›</span>)}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>

      {/* Main Content */}
       <div className="w-full max-w-[calc(100%-296px-24px)] max-lg:max-w-full">
         <div className="w-full">
           <div className="flex flex-col gap-4">

             {/* Profile Info Section */}
             <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-start gap-10 relative">
               {/* Left Column */}
               <div className="flex flex-col items-center md:items-start gap-3 min-w-[40%] md:min-w-[200px]">
                 <div className="relative w-[80px] h-[80px]">
                   <img src="/img/avatar.jpg" alt="avatar" className="rounded-full w-full h-full object-cover"/>
                   <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer">
                     <i className="bi bi-camera text-gray-500 text-sm"></i>
                   </div>
                 </div>
                 <div className="bg-purple-100 text-purple-600 text-sm font-medium rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer">
                   <i className="bi bi-lightning-charge-fill text-base"></i>
                   Trạng thái tìm việc?
                   <i className="bi bi-chevron-down text-xs ml-1"></i>
                 </div>
                  {/* --- Họ và tên (Editable) --- */}
                  {renderField('fullName', 'Họ và tên', 'bi bi-person-badge', 'text')}
                  {/* --- Địa chỉ (Editable) --- */}
                  {renderField('address', 'Địa chỉ', 'bi bi-geo-alt', 'text')}
               </div>

               {/* Right Column */}
               <div className="flex-1 flex flex-col gap-3 w-full">
                  {/* Email (Không sửa) */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 min-h-[32px]">
                     <i className="bi bi-envelope text-gray-500 w-4 text-center"></i>
                     <span>{candidateData.email}</span>
                     <i className="bi bi-patch-check-fill text-green-500"></i>
                  </div>
                  {/* --- Số điện thoại (Editable) --- */}
                  {renderField('phone', 'Số điện thoại', 'bi bi-phone', 'tel')}
                  {/* --- Giới tính (Editable) --- */}
                  {renderField('gender', 'Giới tính', 'bi bi-gender-ambiguous', 'select', [
                      { value: 'Male', label: 'Nam' },
                      { value: 'Female', label: 'Nữ' },
                      { value: 'Other', label: 'Khác' },
                  ])}
                  {/* --- Ngày sinh (Editable) --- */}
                  {renderField('dateOfBirth', 'Ngày sinh', 'bi bi-calendar-event', 'date')}

                  {/* Tình trạng hôn nhân (Ví dụ - Editable nếu có) */}
                   {/* {renderField('maritalStatus', 'Tình trạng hôn nhân', 'bi bi-heart', 'select', [...] )} */}
               </div>
               {/* Không cần nút Edit/Save/Cancel tổng ở đây nữa */}
             </div>

             {/* Các phần khác giữ nguyên */}
             <div className="bg-purple-50 px-4 py-2 rounded-full w-max cursor-pointer flex items-center gap-2">
                 {/* ... */}
             </div>
             <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
                 {/* ... Phần CV ... */}
                 <h2 className="text-lg font-medium text-gray-900 mb-3">CV của tôi</h2>
                {/* ... Logic hiển thị/upload CV ... */}
             </div>
             <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md">
                 {/* ... Phần Tiêu chí tìm việc ... */}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base font-medium text-gray-900">Tiêu chí tìm việc</h2>
                     <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-50 transition"><i className="bi bi-pencil-square text-gray-500 text-lg"></i></button>
                  </div>
                   {/* ... */}
             </div>

           </div>
         </div>
       </div>
     </div>
  );
};

export default ProfilePage;