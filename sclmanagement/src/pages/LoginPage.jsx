import React from "react";
import LoginImage from "../assets/LoginImage.jpg"; // Ensure you have an image in the specified path
const LoginPage = () => {
  return (
    <div className="grid md:grid-cols-2 bg-white">
      {/* Left Side - Image */}
      <div className="hidden md:flex items-center justify-center mt-10 rounded-lg p-10">
        <img
          src={LoginImage}
          alt="School"
          className="object-cover h-full w-full "
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
           <h1 className="flex justify-center font-bold">Empower Your Knowledge</h1>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Register link */}
            <p className="mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
