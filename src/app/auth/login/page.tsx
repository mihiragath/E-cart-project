"use client";

import Link from "next/link";

export default function Login() {
  return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email or Phone</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <a href="/auth/forgotpass" className="text-blue-500 hover:underline">
            forgot password?
          </a>
          <Link href={'/'}>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Log in
          </button>
          </Link>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/auth/signup" className="text-blue-500 hover:underline">
            sign up
          </a>
        </p>
      </div>
    </div>
  );
}
