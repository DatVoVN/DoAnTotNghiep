import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(177.12deg,_#121212_48.81%,_#2563EB_98.26%)] text-white py-10 mt-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Get Help</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Options
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Online Shop</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bag
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dress
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-sky-400">
              <i className="bi bi-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-700">
              <i className="bi bi-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
