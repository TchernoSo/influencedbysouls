import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" shadow-lg shadow-[#f87171]/50 bg-[#14050017] py-4 backdrop-blur-md sticky top-0 z-50 ">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/Symbol.png" alt="Logo" className="h-12 mr-4" /> {/* Adjust the height as needed */}
        <h1 className="text-white text-lg font-bold hidden md:block">InfluencedbySouls</h1>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex flex-grow justify-center mt-1 pr-60 max-sm:pr-8">
        <li>
          <a href="#products" className="text-white hover:text-gray-300 ml-0 cursor-pointer">Products</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-300 ml-8 cursor-pointer">About</a>
        </li>
      </ul>
      
      {/* Social Media Icons */}
      <div className="flex items-center pr-6">
          <a href="https://www.instagram.com/influencedbysouls?igsh=bmR5c3p1NHEyMmI%3D&utm_source=qr
" className="mr-4">
            <img src="/instagram.png" alt="instagram" className="h-6 w-6" /> {/* Adjust the height and width as needed */}
          </a>
          <a href="https://t.me/Influencedbysouls">
            <img src="/telegram.png" alt="telegram" className="h-6 w-6" /> {/* Adjust the height and width as needed */}
          </a>
        </div>
    </div>
  </nav>
);

};

export default Navbar;