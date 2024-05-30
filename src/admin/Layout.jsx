import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { GoFileDirectoryFill } from "react-icons/go";
import { AiFillFileAdd } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
const Layout = () => {
  const { setIsLogIn, setUserDetails, userDetails } = useContext(UserContext);
  const [reload, setReload] = useState(false);
  const [hide, setHide] = useState(false);
  const handleHide = (e) => {
    // console.log("clicked");
    setHide(!hide);
  };
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    localStorage.removeItem("token");
    navigate("/");
    setIsLogIn(false);
    setReload(!reload);
  };

  return (
    <>
      <h1 className="absolute md:top-[5%] md:left-[50%]  left-[25%]  text-lg md:text-3xl italic font-bold ">
        Welcome Admin {userDetails?.name}
      </h1>
      <button
        onClick={handleHide}
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="absolute items-center p-2 mt-2 text-sm text-gray-500 rounded-lg bg-slate-600 md:hidden right-5 top-2 ms-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen 
        ${hide ? "-translate-x-96" : "translate-x-0"}
        `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* all files  */}
            <li>
              <Link
                to={"/admin/allFiles"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GoFileDirectoryFill className="w-[30px] h-[30px]" />
                <span className="flex-1 ms-3 whitespace-nowrap">All Files</span>
              </Link>
            </li>
            {/* //addfile  */}
            <li>
              <Link
                to={"/admin/addFile"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiFillFileAdd className="w-[30px] h-[30px]" />
                <span className="flex-1 ms-3 whitespace-nowrap">Add File</span>
              </Link>
            </li>
            {/* logout  */}
            <li>
              <Link
                onClick={handleSignOut}
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaSignOutAlt  className="w-[30px] h-[30px] md:ml-1  ml-1" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"></ul>
        </div>
      </aside>

      <div className="mt-10 md:p-4 sm:ml-64">
        <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg md:p-4 dark:border-gray-700">
          <div className="mb-4 ">
            <Outlet context={{ reload, setReload }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
