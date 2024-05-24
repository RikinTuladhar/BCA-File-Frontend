import React from "react";
import NavBar from "../components/NavBar";
import UserBodyContainer from "../Format/UserBodyContainer";

const About = () => {
  return (
    <>
      <NavBar />
      <UserBodyContainer>
        <h1 className="text-xl font-bold md:text-3xl">About This Page</h1>
        <p className="text-base font-semibold text-justify md:text-lg">
          This project was made so that anyone may easily contribute to and
          access the notes, even for those who find it difficult to obtain them.
        </p>
        <p className="font-bold cursor-pointer" >Devloped By <a className="text-red-500" href="https://rikinportfolio.vercel.app/">Click here</a></p>
      </UserBodyContainer>
    </>
  );
};

export default About;
