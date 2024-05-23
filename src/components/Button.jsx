import React from "react";

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
      className={`text-xl rounded-xl px-5 py-2 hover:text-white bg-[#7cc0fd] duration-700 text-[#0b3c6f] hover:-translate-y-1 hover:bg-[#005fb8] ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
