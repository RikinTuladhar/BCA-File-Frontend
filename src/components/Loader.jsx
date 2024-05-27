import React from "react";
import { RevolvingDot } from "react-loader-spinner";
const Loader = () => {
  return (
    <RevolvingDot
    visible={true}
    height="20"
    width="20"
    color="#ebf0f3"
    ariaLabel="revolving-dot-loading"
    wrapperStyle={{}}
    wrapperClass=""
    radius={12}
    />
  );
};

export default Loader;