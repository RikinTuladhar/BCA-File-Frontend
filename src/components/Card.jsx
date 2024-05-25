import React, { useEffect, useState } from "react";

const Card = ({ name }) => {
  const [noValue, setNoValue] = useState(false);
  const dataFromApiTrue = () => {
    setTimeout(() => {
      if (name?.length < 0 || name === undefined) {
        setNoValue(true);
      } else {
        setNoValue(false);
      }
    }, 5000);
  };
  useEffect(() => {
    // console.log(dataFromApiTrue());
    // console.log(noValue);
    dataFromApiTrue();
  }, [name]);

  if (name === undefined && name === null) {
    return (
      <div className=" mx-auto p-9 bg-white w-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <img className="rounded-xl" src={"/Images/folderpng.png"} alt="" />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mt-5 text-xl font-semibold md:text-2xl"></h1>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="hover:-translate-y-3 mx-auto p-9 bg-white w-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <img className="rounded-xl" src={"/Images/folderpng.png"} alt="" />
      <div className="flex items-center justify-between">
        {name != null ? (
          <div>
            <h1 className="mt-2 text-base font-semibold md:text-xl">
              {name ?? "Loading.."}
            </h1>
          </div>
        ) : noValue ? (
          <p className="font-bold text-red-700">No Subject Found</p>
        ) : (
          <div role="status" className="w-full max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 mt-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default Card;
