// import React, { useEffect, useState } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(120);
//   useEffect(() => {
//     if (time > 0) {
//       const timerId = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);

//       // Clear the interval when the component unmounts or when the time reaches 0
//       return () => clearInterval(timerId);
//     }
//   }, [time]);
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   return (formatTime(time));
// };

// export default Timer;
