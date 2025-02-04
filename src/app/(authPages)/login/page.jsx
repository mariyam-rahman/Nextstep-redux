"use client";
import Logout from "@/components/logout";
import { login, selectUser } from "@/redux/features/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      {user ? (
        <Logout></Logout>
      ) : (
        <div className="flex items-center justify-center min-h-[90vh] ">
          <div className="w-full max-w-md p-8 space-y-4  rounded-xl shadow-md bg-pink-50">
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-pink-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-pink-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 mt-1 mb-3 text-gray-700 bg-pink-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2  text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
              >
                Login
              </button>
            </form>
            <p className="text-red-700 text-center"> </p>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
