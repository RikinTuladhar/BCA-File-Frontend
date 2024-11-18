import Card from "../components/Card";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserBodyContainer } from "../Imports/ImportAll";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import UserApi from "../Apis/UserApi";
const Home = () => {
  const {getUserByToken} = UserApi();
  const { apiLoaded, formattedTime } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("kbc_token"))
  // console.log(token)
  useEffect(()=>{
    getUserByToken(token)
    .then((res)=>{
      // console.log(res)
    }).catch((err)=>console.log("No user found with token"))
  },[])
  const [data, setData] = useState([
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
    { id: 5, name: "Semester 5" },
    { id: 6, name: "Semester 6" },
    { id: 7, name: "Semester 7" },
    { id: 8, name: "Semester 8" },
  ]);
  return (
    <div className="relative px-2 py-2 md:px-5 md:py-5 min-h-[100vh]">
      <NavBar />

      {
      //logic to show the starting timer of response from server
      !apiLoaded && (
        <div className="grid w-full text-xl text-black font-semibold   bg-gradient-to-r from-[#9CAFB7] to-[#5c5d5e]   md:font-bold md:text-2xl place-items-center">
          Waiting for server to response please wait, maximum time for {formattedTime} !!!
        </div>
      )}
      <UserBodyContainer>
        {data?.map((card, id) => (
          <Link key={id} to={`/semester/${card.id}`}>
            <Card name={card.name} />
          </Link>
        ))}
      </UserBodyContainer>
    </div>
  );
};

export default Home;
