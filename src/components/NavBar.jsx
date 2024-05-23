import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  const [click, setClick] = useState(false);  
  const [token,setToken] = useState(localStorage.getItem("token"));
  // alert("Token: " + token);
  return (
    <nav
    transition={{ duration: 0.5 }} className="px-6 py-2 rounded-t-[20px] bg-[rgb(241,250,254)] shadow-2xl lg:px-16 lg:py-0">
      <div className="grid place-items-center lg:hidden">
        <Link
          to={"/"}
          className="flex items-center text-lg w-[100px] font-semibold"
        >
          <img
            src={"/Images/Logo.png"}
            className="w-full h-full p-2"
            alt="Rz Codes Logo"
          />
        </Link>
      </div>
      <label
        onClick={(e) => setClick(!click)}
        for="menu-toggle"
        className="block cursor-pointer lg:hidden"
      >
        <svg
          className="text-gray-900 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <div
        className={`${
          click == true ? ` block` : `hidden`
        } w-full lg:flex lg:items-center lg:w-auto" id="menu`}
      >
        <nav className="w-full">
          <ul className="flex-wrap items-center justify-between w-full py-2 text-xl gap-x-5 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
            <div className=" md:items-center md:flex-wrap md:flex md:gap-8 justify-evenly">
              <Link
                to={"/"}
                className="hidden lg:flex md:items-center text-lg w-[100px] font-semibold"
              >
                <img
                  src={"/Images/Logo.png"}
                  className="w-full h-full p-2"
                  alt="Rz Codes Logo"
                />
              </Link>
              <li className="py-2 lg:py-0 ">
                <Link
                  className="text-[#0c546d] text-xl font-semibold hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                  to={"/semester"}
                >
                  Semester
                </Link>
              </li>
              <li className="py-2 lg:py-0 ">
                <Link
                  className="text-[#0c546d] text-xl font-semibold hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                  to={"/projects"}
                >
                  Projects
                </Link>
              </li>

              <li className="py-2 lg:py-0 ">
                <a
                  className="text-[#0c546d] text-xl font-semibold hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                  href="#"
                >
                  About
                </a>
              </li>
              {token ?
                <li className="py-2 lg:py-0 ">
                  <Link to={"/addFile"}
                    className="text-[#0c546d] text-xl font-semibold hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                    href="#"
                  >
                    File Upload
                  </Link>
                </li> : ""
              }
            </div>
            <div className="">
              {!token ? <li className="py-2 lg:py-0 ">
                <Link
                  className="text-[#0c546d] text-xl font-semibold hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                  to={"/signin"}
                >
                  Login
                </Link>
              </li> : ""}
            </div>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
