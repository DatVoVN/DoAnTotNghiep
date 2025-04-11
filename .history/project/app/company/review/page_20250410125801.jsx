import BlogIT from "@/components/Blog/BlogIT";
import React from "react";
const reviews = [
  {
    id: 1,
    user: "Alice",
    rating: 5,
    comment: "Great working environment and helpful team!",
  },
  {
    id: 2,
    user: "Bob",
    rating: 4,
    comment: "Good experience overall, but can improve management.",
  },
  {
    id: 3,
    user: "Charlie",
    rating: 3,
    comment: "Average workplace. Decent pay and benefits.",
  },
];
const averageRating =
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
const page = () => {
  return (
    <div className="h-auto w-full">
      <div className="w-full h-80 grid grid-cols-2 bg-gray-100 shadow-lg rounded-lg p-6">
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <div className="flex gap-6 items-center">
            <div>
              <img
                src="/1.jpg"
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">FORNATU</div>
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">
                  WRITE REVIEW
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow">
            Review
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow">
            Job Number
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl mb-5 sticky top-0 z-10 justify-center items-center p-10 mt-2">
        <ul className="flex justify-around xl:justify-start gap-8 xl:gap-12 px-5 xl:px-6">
          <li className="list-none">
            <a
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2"
              href="/company"
            >
              Overview
            </a>
          </li>
          <li className="list-none relative">
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors pb-2"
              href="/company/review"
            >
              Reviews
              <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-[0.5]">
                17
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        {/* Title */}
        <div className="text-2xl font-semibold">
          Please take a minute to share your work experience at FORTNA
        </div>

        {/* Star rating section */}
        <section className="flex flex-col xl:flex-row xl:items-center items-start gap-4">
          <div className="flex flex-row-reverse space-x-reverse space-x-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <a
                key={star}
                href={`/companies/fortna/review/new?init_rate=${star}&utm_campaign=button_feature_review&utm_medium=new_review&utm_source=emp_page`}
                className={`star star${star}`}
              >
                <span className="w-6 h-6 block bg-yellow-400 rounded-full" />
              </a>
            ))}
          </div>
          <p className="text-gray-600 mt-2 xl:mt-0">
            Select star to start reviewing
          </p>
        </section>

        {/* Anonymous Note */}
        <div className="flex items-start gap-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#alert-circle" />
          </svg>
          <span className="text-sm text-gray-700">
            Your review for FORTNA will be submitted anonymously.
          </span>
        </div>
      </div>

      <div className="p-2">
        <BlogIT />
      </div>
    </div>
  );
};

export default page;
