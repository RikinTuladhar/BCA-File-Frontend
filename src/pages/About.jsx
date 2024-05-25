import React from "react";
import NavBar from "../components/NavBar";
import UserBodyContainer from "../Format/UserBodyContainer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigation = useNavigate();
  return (
    <>
      <NavBar />
      <UserBodyContainer>
        <h1 className="mt-2 text-xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-[#09609b] to-[#5c5d5e]">
          About this web-app
        </h1>
        <p className="px-2 text-base font-semibold leading-loose text-justify break-words break-all whitespace-pre-line hyphens-auto text-pretty md:px-5 md:text-lg">
          I created this website for the students of this university to
          facilitate easy access to the notes provided by their teachers. This
          is a straightforward and user-friendly platform designed specifically
          for academic use, aiming to enhance the students' learning experience
          by making study materials readily available. It serves as a practical
          tool for educational purposes, ensuring that students can efficiently
          retrieve the information they need for their studies.
        </p>
        <div className="w-full">
          <p className="ml-2 font-bold text-left cursor-pointer ">
            Devloped By{" "}
            <a
              className="bg-gradient-to-br bg-clip-text from-[#476882] to-[#334859]"
              href="https://rikinportfolio.vercel.app/"
            >
              Rikin..
            </a>
          </p>
          <div className="relative">
          
            <img src="Images/click.png"  onClick={e => window.location.href = "https://rikinportfolio.vercel.app/"} className="left-28 animate-bounce  bottom-[-5rem]  absolute w-[100px] h-[100px]" alt="click" />
          </div>
        </div>
      </UserBodyContainer>
    </>
  );
};

export default About;
