import React, { createContext, useContext, useEffect, useState } from "react";
import UserApi from "../Apis/UserApi";
import { reloadConext } from "./ReloadProvider";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserDetailsProvider = ({ children }) => {
  const { reload, setReload } = useContext(reloadConext);
  //handling time required from server response
  const [formattedTime, setFormattedTime] = useState("");
  const [time, setTime] = useState(130);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when the component unmounts or when the time reaches 0
      return () => clearInterval(timerId);
    }
  }, [time]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const { getUserByToken } = UserApi();
  const [token, setToken] = useState(localStorage.getItem("token")); //on relad this takes data from local, and for quick access without reload it set directly when taken from api
  const [userDetails, setUserDetails] = useState({
    id: "",
    firstName: "",
    lastname: "",
    username: "",
    role: "",
  });
  // console.log(formatTime(time));

  useEffect(() => {
    setFormattedTime(formatTime(time));
  }, [time]);

  //for timer checking if api was hit or not?
  const [apiLoaded, setApiLoaded] = useState(false);
  useEffect(() => {
    formatTime(time); //starting timer
    getUserByToken(token)
      .then((res) => {
        // console.log(res);
        if(!apiLoaded){  //from flase -> true
          setApiLoaded(true) //api hit true
        }
        setUserDetails(res);
        // console.log(res)
      })
      .catch((err) => {
        if(!apiLoaded){
          setApiLoaded(true)
        }
        console.log(err);
      });
  }, [token]);
  return (
    <UserContext.Provider
      value={{ userDetails, token, setToken, apiLoaded, formattedTime }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserDetailsProvider;
