// import React from "react";
// import { useLocation } from "react-router-dom";

// const BreadScrum = () => {
//   const location = useLocation();
//   let currentLocation = "";
//   const crumb = location.pathname
//     .split("/")
//     .filter((path) => path !== "")
//     .map((path) => {
//       currentLocation = currentLocation + "/" + path;

//       return (
//         <div className="breadcrumb-item" key={path}>
//           <a href={currentLocation}>{path}</a>
//         </div>
//       );
//     });
//   console.log(crumb);
//   console.log(currentLocation);
//   return (
//     <div className="flex w-full bg-slate-400 gap-5">
//       {crumb.map((crumb) => (
//         <div key={crumb}>{crumb}</div>
//       ))}
//     </div>
//   );
// };

// export default BreadScrum;
