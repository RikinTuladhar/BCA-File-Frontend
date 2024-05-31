import React from "react";
import Loader from "./Loader";
const Button = ({
  text,
  type = "button",
  onClick,
  disabled,
  className,
  style,
  icon,
}) => {
  return (
    <button
      className={`text-xl flex font-bold rounded-xl px-3 gap-2 py-2 hover:text-white bg-[#7cc0fd] duration-700 text-[#0b3c6f] ${
        disabled === true ? "" : "hover:-translate-y-1"
      }  hover:bg-[#005fb8] ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {disabled && <Loader />}
      {text}
    </button>
  );
};

export default Button;
