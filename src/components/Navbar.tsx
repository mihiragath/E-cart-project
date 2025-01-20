"use client";
import React, { useState } from "react";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 bg-white shadow-md z-50",
        className
      )}
    >
      {/* Top Navbar */}
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-blue-600 text-2xl font-bold">
            Flipkart
          </a>
          <span className="text-sm text-gray-500">
            <a href="/explore-plus" className="flex items-center">
              Explore <span className="text-yellow-500 ml-1">Plus ✨</span>
            </a>
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-2 rounded-md bg-blue-50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 text-blue-600 hover:text-blue-800"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="flex items-center space-x-6 text-gray-600">
          <a
            href="/"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span>Home</span>
          </a>
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Products</span>
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg border rounded-md z-50">
                <ul className="flex flex-col text-gray-700">
                  {[
                    { href: "/menubar/mobiles-tablets", label: "Mobiles & Tablets" },
                    { href: "/menubar/health", label: "Health" },
                    { href: "/menubar/electronics", label: "Electronics" },
                    { href: "/menubar/fashion", label: "Fashion" },
                    { href: "/menubar/grocery", label: "Grocery" },
                    { href: "/menubar/sports", label: "Sports" },
                    { href: "/menubar/furnitures", label: "Furniture" },
                    { href: "/menubar/gadgets", label: "Gadgets" },
                  ].map((item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a
            href="/auth/login"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span>Login</span>
          </a>
          <a
            href="/menubar/cart"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            🛒<span>Cart</span>
          </a>
          <Link
            href="/profile/myProfile"
            className="relative flex items-center space-x-1 hover:text-blue-600"
          >
            {/* Profile Avatar */}
            <img
              src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"
              alt="Profile Avatar"
              className="w-12 h-12 rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
