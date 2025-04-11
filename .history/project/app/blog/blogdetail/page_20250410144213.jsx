// src/pages/BlogDetail.jsx
import BlogIT from "@/components/Blog/BlogIT";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Cân bằng cuộc sống và công việc tại ZIGExN VeNtura
      </h1>
      <img
        src="/1.jpg"
        alt="Blog"
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        ZIGExN VeNtura là thành viên của Tập đoàn ZIGExN Nhật Bản, một công ty
        công nghệ niêm yết trên sàn chứng khoán Tokyo. Với môi trường linh hoạt,
        nhân viên được hỗ trợ để phát triển bản thân một cách toàn diện và cân
        bằng giữa công việc và cuộc sống cá nhân.
      </p>
      <p className="text-base text-gray-600">
        Ngoài việc tạo điều kiện làm việc linh hoạt, công ty còn tổ chức nhiều
        hoạt động gắn kết đội ngũ như team building, workshop phát triển kỹ
        năng, cùng với chế độ đãi ngộ hấp dẫn. Nhân viên được khuyến khích đổi
        mới, đóng góp ý tưởng và phát triển nghề nghiệp một cách bền vững.
      </p>
      <div>
        <BlogIT />
      </div>
    </div>
  );
};

export default BlogDetail;
