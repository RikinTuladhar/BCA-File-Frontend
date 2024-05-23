import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
const SignApi = () => {
  const { setToken } = useContext(UserContext);
  const base = "https://bca-file-backend.onrender.com";

  async function SignInApi(value) {
    try {
      const URL = `${base}/login`;
      console.log(URL);
      const response = await axios.post(URL, value);
      console.log(response);
      const data = await response.data.token;
      console.log(data);
      setToken(data);
      return data;
    } catch (error) {
      // Throw the error response if it exists, otherwise throw the error itself
      throw new Error(error.message);
    }
  }

  async function signUpAPI() {}

  return { signUpAPI, SignInApi };
};

export default SignApi;
