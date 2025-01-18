"use client";
import React from "react";
import { cn } from "../utils/cn";

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 bg-white shadow-md z-50",
        className
      )}
    >
      {/* Top Navbar */}
      <div className="container mx-auto flex itAems-center justify-between px-6 py-3">
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
          <a
            href="/sell"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            🏪<span>Become a Seller</span>
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto flex justify-between px-6">
          {[
            {
              href: "/menubar/mobiles-tablets",
              imgSrc:
                "https://www.pngkey.com/png/full/377-3778414_generic-smartphone-png.png",
              label: "Mobiles & Tablets",
            },
            {
              href: "/menubar/health",
              imgSrc:
                "https://wallpapers.com/images/hd/vega-sport-premium-vanilla-protein-powder-jijgc9a9tmld1zbo.png",
              label: "Health",
            },
            {
              href: "/menubar/electronics",
              imgSrc:
                "https://www.pngplay.com/wp-content/uploads/6/Electronic-Gadgets-Transparent-Free-PNG.png",
              label: "Electronics",
            },
            {
              href: "/products/fashion",
              imgSrc:
                "https://tse2.mm.bing.net/th?id=OIP.o9MFd38T64x5vuyYO61vRgHaIn&rs=1&pid=ImgDetMain",
              label: "Fashion",
            },
            {
              href: "/products/glocery",
              imgSrc:
                "https://freepngimg.com/download/grocery/41619-7-groceries-free-download-image.png",
              label: "Grocery",
            },
            {
              href: "/category/sports",
              label: "Sports",
              imgSrc:
                "https://tse2.mm.bing.net/th?id=OIP.5kVVU-cdnyvBXsVpSJW-gQHaDt&rs=1&pid=ImgDetMain",
            },
            {
              href: "/products/furniture",
              imgSrc:
                "https://www.pngarts.com/files/7/Modern-Furniture-Download-PNG-Image.png",
              label: "Furniture",
            },
            {
              href: "/products/gadgets",
              imgSrc:
                "https://brain-images-ssl.cdn.dixons.com/3/7/10203573/u_10203573.jpg",
              label: "Gadgets",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600"
            >
              <img
                src={item.imgSrc}
                alt={item.label}
                className="h-12 w-12 rounded-full"
              />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
