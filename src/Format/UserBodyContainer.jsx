import React from "react";
import { motion } from "framer-motion";
const UserBodyContainer = ({ children }) => {
  return (
    <div
      class="w-full  bg-[#dff4ff] flex justify-center gap-10 px-5 py-5 items-center flex-wrap"
    >
      {children}
    </div>
  );
};

export default UserBodyContainer;
