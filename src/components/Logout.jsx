import { logout, selectUser } from "@/redux/features/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="text-center ">
      <h1 className="text-black text-3xl pt-20">
        Welcome <span className="text-blue-500">{user.name}</span>!
      </h1>
      <button onClick={(e) => handleLogout(e)} className="button mt-6">
        Logout
      </button>
    </div>
  );
};

export default Logout;
