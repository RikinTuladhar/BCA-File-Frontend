import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Imports/ImportAll";
import SignApi from "../Apis/SignApi";
import { ToastContainer, toast } from "react-toastify";
import { reloadConext } from "../GlobalContext/ReloadProvider";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Imports/ImportAll";
import Loader from "../components/Loader";
const SignIn = () => {
  const { SignInApi } = SignApi();
  const { reload, setReload } = useContext(reloadConext);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  // console.log(clicked)
  const buttonRef = useRef();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    const { username, password } = data;
    if (username && password) {
      toast.info("Please wait processing");
      SignInApi(data)
        .then((res) => {
          setReload(true);
          // console.log(res);

          toast.success("Login Success");
          if (res?.role === "USER") {
            setTimeout(() => {
              setReload(false);
              setClicked(false);
              navigate("/");
            }, 3000);
          } else {
            setTimeout(() => {
              setReload(false);
              setClicked(false);
              navigate("/admin/allFiles");
            }, 3000);
          }
        })
        .catch((err) => {
          toast.error("Username or password is invalid");
          setClicked(false);
        });
    } else {
      setClicked(false);
      return toast.error("Please enter all fields");
    }
  };
  // console.log(data);
  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div class="flex min-h-screen items-center justify-center">
        <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Sign In
          </h4>
          <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter your details to Sign In.
          </p>
          <form
            onSubmit={handleSubmit}
            class="mt-8 mb-2   max-w-screen-lg sm:w-96"
          >
            <div class="mb-4 px-5 flex flex-col gap-6">
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#2696a6]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                  name="username"
                  onChange={handleChange}
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  User Name
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#2696a6] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=""
                  name="password"
                  onChange={handleChange}
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            <div className="grid h-[10vh] w-full mb-3 place-items-center">
              <button
                className="flex justify-evenly gap-2 items-center  select-none rounded-lg bg-blue-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-[#2696a6] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
                ref={buttonRef}
                disabled={clicked}
              >
                {clicked && <Loader />}
                <span className="text-lg">Log In</span>
              </button>
            </div>
            <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Do not have an account?
              <Link
                class="font-semibold text-[#2696a6] transition-colors hover:text-blue-700"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </p>
          </form>
          <Link to={"/"} className="text-lg font-bold">
            {" "}
            Go back
          </Link>
        </div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      </div>
    </Container>
  );
};

export default SignIn;
