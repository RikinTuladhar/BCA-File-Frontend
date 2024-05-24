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
    console.log(dataFromApiTrue());
    console.log(noValue);
  }, [name]);

  if (name === undefined && name === null) {
    return (
      <div class=" mx-auto p-9 bg-white w-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <img class="rounded-xl" src={"/Images/folderpng.png"} alt="" />
        <div class="flex justify-between items-center">
          <div>
            <h1 class="mt-5 text-xl md:text-2xl font-semibold"></h1>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div class="hover:-translate-y-3 mx-auto p-9 bg-white w-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <img class="rounded-xl" src={"/Images/folderpng.png"} alt="" />
      <div class="flex justify-between items-center">
        {name != null ? (
          <div>
            <h1 class="mt-2 text-base  md:text-xl font-semibold">
              {name ?? "Loading.."}
            </h1>
          </div>
        ) : noValue ? (
          <p className="font-bold text-red-700">No Subject Found</p>
        ) : (
          <div role="status" class="w-full max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2"></div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default Card;
