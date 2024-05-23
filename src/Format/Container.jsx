import React from "react";

const Container = ({ children,className }) => {
  return (
    <div className={`${className}  w-full rounded-2xl shadow-2xl bg-[#ebf0f3] flex justify-center px-2 py-2 gap-10 md:px-5 md:py-5 items-center flex-wrap `}>
      {children}
    </div>
  );
};

export default Container;
