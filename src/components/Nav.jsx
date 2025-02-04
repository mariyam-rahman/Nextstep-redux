"use client";
import { logout, selectUser } from "@/redux/features/userSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const pathName = usePathname();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const menuItems = (
    <>
      <li>
        <Link href="/" className="text-black text-lg font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-black text-lg font-bold">
          About
        </Link>
      </li>
      <li>
        <Link href="/services" className="text-black text-lg font-bold">
          Services
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-black text-lg font-bold">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/posts" className="text-black text-lg font-bold">
          Posts
        </Link>
      </li>
    </>
  );
  if (!pathName.includes("dashboard")) {
    return (
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>

          <Link href="/" className="text-black text-2xl font-bold ">
            Next Step
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="btn btn-soft ">
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn btn-soft">
              Login
            </Link>
          )}
        </div>
        <hr />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Nav;
