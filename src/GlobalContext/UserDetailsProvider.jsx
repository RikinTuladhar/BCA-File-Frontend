import React, { createContext, useContext, useEffect, useState } from "react";
import UserApi from "../Apis/UserApi";
import { reloadConext } from "./ReloadProvider";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserDetailsProvider = ({ children }) => {
  const { reload, setReload } = useContext(reloadConext);
  const { getUserByToken } = UserApi();
  const [token, setToken] = useState(localStorage.getItem("token")); //on relad this takes data from local, and for quick access without reload it set directly when taken from api
  const [userDetails, setUserDetails] = useState({
    id: "",
    firstName: "",
    lastname: "",
    username: "",
    role:""
  });
  useEffect(() => {
    getUserByToken(token)
      .then((res) => {
        // console.log(res);
        setUserDetails(res);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token,reload]);
  return (
    <UserContext.Provider value={{ userDetails, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDetailsProvider;
