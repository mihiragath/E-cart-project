'use client';

import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-[90%] lg:w-[70%]">
        {/* Left Section: Credit Card */}
        <div className="bg-blue-700 text-white flex flex-col justify-center items-center p-8 w-full lg:w-1/3">
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl p-4 rounded-lg w-64 h-40 transform translate-y-12">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">VISA</div>
              <div className="bg-yellow-400 w-6 h-6 rounded-full"></div>
            </div>
            <div className="mt-8 text-lg font-semibold tracking-widest">
              **** **** **** 2142
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <span className="block uppercase">09/20</span>
                <span>Expiry</span>
              </div>
              <div>
                <span className="block">Gaurav Patel</span>
                <span>Cardholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Payment Details */}
        <div className="p-8 w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Payment Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Cardholder Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                defaultValue="Gaurav Patel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Card Number</label>
              <input
                type="text"
                placeholder="Enter card number"
                defaultValue="4214 5545 7414 2142"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  defaultValue="09/20"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="saveDetails"
                className="mr-2 rounded text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="saveDetails" className="text-gray-600 text-sm">
                Save my details for future payments
              </label>
            </div>
            <Link href={'/menubar/cart'}>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            onClick={()=>alert('Payment Sucessfully')}
            >
              Pay Now
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
