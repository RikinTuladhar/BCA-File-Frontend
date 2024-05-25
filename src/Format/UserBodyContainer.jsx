import React from "react";
import "../CSS/GlassMorphism.css"
const UserBodyContainer = ({ children }) => {
  return (
    <div
      class="glassmorpf bg-gradient-to-b pb-5 rounded-b-xl from-[#deecfb] to-[#c4dff9]  flex justify-center px-5 py-10 gap-10 md:px-5 md:py-5 h-[auto] items-center flex-wrap"
    >
      {children}
    </div>
  );
};

export default UserBodyContainer;
