import React from "react";

const Company = () => {
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
              href="/companies/fortna"
            >
              Overview
            </a>
          </li>
          <li className="list-none relative">
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors pb-2"
              href="/companies/fortna/review"
            >
              Reviews
              <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                17
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-2xl px-5 pt-6 pb-8 mb-5 xl:px-6 xl:pb-8">
        <h2 className="border-b border-dashed pb-4 text-xl font-semibold text-gray-800">
          General information
        </h2>
        <div className="flex flex-col xl:flex-row xl:pt-4 divide-y xl:divide-y-0 xl:divide-x divide-dotted">
          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company type
            </div>
            <div className="text-base">IT Product</div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company industry
            </div>
            <div className="text-right xl:text-left">
              <div className="pl-2 md:pl-0">
                <div className="inline-flex flex-wrap">
                  Transportation, Logistics and Warehouse
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Company size
            </div>
            <div className="text-base">51-150 employees</div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col xl:flex-row xl:pt-4 divide-y xl:divide-y-0 xl:divide-x divide-dotted">
          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">Country</div>
            <div className="flex items-center">
              <svg className="hidden">
                <symbol id="us-flag" viewBox="0 0 512 512"></symbol>
              </svg>
              <div className="inline-block">
                <svg className="w-5 h-5 mr-1 align-middle">
                  <use xlinkHref="#us-flag" />
                </svg>
                <span className="align-middle">United States</span>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Working days
            </div>
            <div className="text-base">Monday - Friday</div>
          </div>

          <div className="xl:w-1/3 flex flex-col justify-between py-2 xl:py-0 px-0 xl:px-4">
            <div className="text-gray-600 text-sm font-medium">
              Overtime policy
            </div>
            <div className="text-base">Extra salary for OT</div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl px-5 pt-6 pb-8 mb-5 xl:px-6 xl:pb-8">
        <h2 className="border-b border-dashed pb-4 text-xl font-semibold">
          Company overview
        </h2>

        <div className="pt-4 break-words prose max-w-none">
          <p>
            <strong>FORTNA</strong> - Warehouse and Distribution Solution
            powered by Automation - Software - Robotics
          </p>

          <p>
            Founded in 1946, FORTNA partners with the world’s leading brands to
            transform omnichannel and parcel distribution operations. Known
            world-wide for enabling companies to keep pace with digital
            disruption and growth objectives,{" "}
            <strong>
              we design and deliver solutions, powered by intelligent software,
              to optimize fast, accurate and cost-effective order fulfillment
              and last mile delivery.
            </strong>{" "}
            We deliver exceptional value every day to our customers with
            comprehensive services and products including network strategy,
            distribution center operational design and implementation, material
            handling automated equipment, robotics and a comprehensive suite of
            lifecycle services.
          </p>

          <p>
            <strong>FORTNA VIETNAM</strong> main business focuses on Software
            Development to build the market-leading warehouse execution software
            solutions which is used by its worldwide customers.
          </p>

          <p>
            At FORTNA, we believe in fostering a workplace that isn’t just a job
            but a movement – a collective effort to redefine success and
            transform challenges into opportunities. “Join the Movement”
            encapsulates our commitment to a workplace culture that thrives on
            collaboration, celebrates diversity and empowers every individual to
            contribute to something greater than themselves.
          </p>

          <p>
            <strong>Our Team. Our Passion. Our Approach.</strong>
          </p>

          <p>
            What sets us apart is not just what we do, but how we do it. The
            FORTNA Way.
          </p>

          <p>
            We understand that to be a world-class software organization, we
            need the best people. <strong>Join us. Join the Movement.</strong>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row border-t border-dashed mt-4">
          <a
            href="https://www.fortna.com/about/careers/"
            className="flex items-center cursor-pointer pt-4 pr-4 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2 fill-current">
              <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#globe"></use>
            </svg>
            Company website
          </a>

          <a
            href="https://www.facebook.com/fortna.vietnam"
            className="flex items-center cursor-pointer pt-4 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2 fill-current">
              <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#facebook"></use>
            </svg>
            Fanpage Facebook
          </a>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl px-5 pt-6 pb-8 mb-5 xl:px-6 xl:pb-8">
        <h2 className="border-b border-dashed pb-4 text-xl font-semibold">
          Our key skills
        </h2>

        <div className="pt-4 break-words">
          <div className="text-lg font-medium">
            Skills We Use, Domain We Work
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="/it-jobs/oracle?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              Oracle
            </a>
            <a
              href="/it-jobs/java?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              Java
            </a>
            <a
              href="/it-jobs/reactjs?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              ReactJS
            </a>
            <a
              href="/it-jobs/oop?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              OOP
            </a>
            <a
              href="/it-jobs/english?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              English
            </a>
            <a
              href="/it-jobs/linux?click_source=Skill+tag"
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              Linux
            </a>
          </div>

          <div className="pt-4 prose max-w-none">
            <p>
              Providing in-house development product for distribution &amp;
              fulfillment industry, using verified technology stack such as:
            </p>
            <p>
              - Java, Spring, Hibernate, Apache Camel, Netty; C/C++; Go; Shell
              scripting.
            </p>
            <p>- Docker, K3S, Linux, VMWare</p>
            <p>- Oracle, Postgres Database.</p>
            <p>- ReactJS, AngularJS, VueJS, SocketIO (Web application)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
