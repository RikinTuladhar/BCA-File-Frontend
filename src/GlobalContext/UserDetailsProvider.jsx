import React, { createContext, useContext, useEffect, useState } from "react";
import UserApi from "../Apis/UserApi";
import { reloadConext } from "./ReloadProvider";
import { toast } from "react-toastify";
import { useFetcher } from "react-router-dom";
import SubjectApi from "../Apis/SubjectApi";
export const UserContext = createContext();

const UserDetailsProvider = ({ children }) => {
  const { getSubjectAll } = SubjectApi();
  const { getUserByToken } = UserApi();
  const { reload, setReload } = useContext(reloadConext);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [formattedTime, setFormattedTime] = useState("");
  const [time, setTime] = useState(130);
  const [isLogIn, setIsLogIn] = useState(false);
  const [userDetails, setUserDetails] = useState({
    id: "",
    firstName: "",
    lastname: "",
    username: "",
    role: "",
  });
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time]);

  useEffect(() => {
    setFormattedTime(formatTime(time));
  }, [time]);

  useEffect(() => {
    getSubjectAll()
      .then((res) => {
        //to start the timer throwing a get api
        if (!apiLoaded) {
          setApiLoaded(true);
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    //if login or not.
    if (isLogIn) {
      //when sign in then it set to true else its false
      getUserByToken(token)
        .then((res) => {
          setUserDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setUserDetails({
        id: "",
        firstName: "",
        lastname: "",
        username: "",
        role: "",
      });
      setToken(null);
      localStorage.removeItem("token");
    }
  }, [token, isLogIn]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        token,
        setToken,
        apiLoaded,
        formattedTime,
        isLogIn,
        setIsLogIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserDetailsProvider;
