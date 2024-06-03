import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Imports/ImportAll";
import SignApi from "../Apis/SignApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
const SignUp = () => {
  const { signUpAPI } = SignApi();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastname: "",
    password: "",
    role: "USER",
  });
  const [error, setError] = useState({
    username: "",
    firstName: "",
    lastname: "",
    password: "",
  });

  const navigate = useNavigate();
  // console.log(error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validFields = (username, firstName, lastname, password) => {
    let count = 0;
    const error = {
      username: "",
      firstName: "",
      lastname: "",
      password: "",
    };
    if (!username) {
      error.username = "Username is required";
      ++count;
    }
    if (!firstName) {
      (error.firstName = "First Name is required"), ++count;
    }
    if (!lastname) {
      (error.lastname = "Last Name is required"), ++count;
    }
    if (password.length < 6 || password.length > 12) {
      (error.password = "Password must be between 6 to 12 characters"), ++count;
    }
    setError(error);
    return count === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, firstName, lastname, password } = data;
    if (validFields(username, firstName, lastname, password)) {
      setButtonClicked(true);
      // alert("Clicked ");
      signUpAPI(data)
        .then((res) => {
          // alert(res);
          toast.success(res);
          setData({
            username: "",
            firstName: "",
            lastname: "",
            password: "",
          });
          setButtonClicked(false);
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
        })
        .catch((err) => {
          const status = err?.response?.status || err?.status;
          if (status === 401) {
            setButtonClicked(false);
            toast.error("Username already taken");
            console.log(err);
          } else {
            setButtonClicked(false);
            const errorMessage =
              err?.response?.data?.message ||
              err.message ||
              "User name Already taken";
            toast.error(errorMessage);
            console.log(err);
          }
        });
    } else {
      toast.error("Please enter valid fileds");
      return;
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
      <div className="flex items-center justify-center min-h-screen gap-5">
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sign Up
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Enter your details to register.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-screen-lg mt-8 mb-2 sm:w-96"
          >
            <div className="flex flex-col gap-6 mb-4">
              <div className="relative  my-2 md:my-0  h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#2696a6]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={handleChange}
                  name="username"
                  value={data?.username}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  User Name
                </label>
                {error.username && (
                  <span className="text-red-700">{error.username}</span>
                )}
              </div>
              <div className="relative  my-2 md:my-0  h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  value={data?.firstName}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  FirstName
                </label>
                {error.firstName && (
                  <span className="text-red-700 ">{error.firstName} </span>
                )}
              </div>
              <div className="relative  my-2 md:my-0  h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={handleChange}
                  type="text"
                  name="lastname"
                  value={data?.lastname}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  lastname
                </label>
                {error.lastname && (
                  <span className="text-red-700">{error.lastname}</span>
                )}
              </div>
              <div className="relative mb-5  mt-2 md:mt-0 md:mb-5 h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#2696a6] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                {error.password && (
                  <span className="text-red-500 ">{error.password}</span>
                )}
              </div>
            </div>

            <div className="grid h-[10vh] w-full mb-3 place-items-center">
              <button
                className="flex justify-evenly gap-2 items-center  select-none rounded-lg bg-blue-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-[#2696a6] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
                disabled={buttonClicked}
              >
                {buttonClicked && <Loader />}
                Register
              </button>
            </div>
            <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
              Already have an account?
              <Link
                className="font-semibold text-[#2696a6] transition-colors hover:text-blue-700"
                to={"/signin"}
              >
                Sign In
              </Link>
            </p>
          </form>
          <Link to={"/"}> Go back</Link>
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

export default SignUp;
