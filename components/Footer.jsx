import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white-100 text-gray-700">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <Image className="w-32" src={assets.logo} alt="logo" />
            <p className="mt-5 text-sm leading-relaxed">
              Discover the perfect blend of quality and style with our premium
              collection. From the latest trends to timeless classics, shop a
              curated selection of top-rated products designed to elevate your
              lifestyle.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-900 mb-4">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-sm">Phone: 9199115861</p>
            <p className="text-sm">Email: jeetendrakumar5861@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-200 py-4 text-center text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
