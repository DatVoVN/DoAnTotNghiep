import React from "react";

const Blog = ({ size = "small" }) => {
  const isLarge = size === "large";

  return (
    <div
      className={`rounded overflow-hidden shadow-lg ${
        isLarge ? "h-full" : "h-[full/2]"
      }`}
    >
      <img
        src="/1.jpg"
        alt="Blog Thumbnail"
        className={`w-full ${isLarge ? "h-60" : "h-24"} object-cover`}
      />
      <div className="p-4">
        <h2 className={`font-bold ${isLarge ? "text-xl" : "text-base"} mb-2`}>
          Cân bằng cuộc sống và công việc tại ZIGExN VeNtura:
        </h2>
        <p className={`text-gray-700 ${isLarge ? "text-base" : "text-sm"}`}>
          Khi sự linh hoạt giúp nhân viên tỏa sáng.
        </p>
        {isLarge && (
          <p className="text-gray-500 mt-2 text-sm">
            ZIGExN VeNtura là thành viên của Tập đoàn ZIGExN Nhật Bản, một công
            ty công nghệ niêm yết trên sàn chứng khoán Tokyo...
          </p>
        )}
        <a
          href="#"
          className="text-blue-600 mt-3 inline-block text-sm hover:underline"
        >
          Start reading →
        </a>
      </div>
    </div>
  );
};

export default Blog;
