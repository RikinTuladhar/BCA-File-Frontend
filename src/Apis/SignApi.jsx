import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
const SignApi = () => {
  const { setToken, isLogIn, setIsLogIn } = useContext(UserContext);
  const base = "https://bca-file-backend.onrender.com";

  async function SignInApi(value) {
    try {
      const URL = `${base}/login`;
      // console.log(URL);
      const response = await axios.post(URL, value);
      console.log(response);
      const data = await response.data.token;
      console.log(data);
      setToken(data);
      localStorage.setItem("token", data);
      setIsLogIn(true)
      const redirect = await axios.get(`${base}/getUser/${data}`, {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });
      const redirectResponse = await redirect.data;
      console.log(redirectResponse);
      return redirectResponse;
    } catch (error) {
      // Throw the error response if it exists, otherwise throw the error itself
      throw new Error(error.message);
    }
  }

  async function signUpAPI(value) {
    // https://bca-file-backend.onrender.com/register
    const endpoint = `${base}/register`;
    try {
      const response = await axios.post(endpoint, value);
      let data = response?.data?.token;
      if (data.length > 0) {
        return "Account successfully registered";
      } else {
        return "Something went wrong";
      }
    } catch (error) {
      throw Promise.reject(error);
    }
  }

  return { signUpAPI, SignInApi };
};

export default SignApi;
