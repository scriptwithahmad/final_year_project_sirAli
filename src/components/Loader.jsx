import React from "react";

const Loader = () => {
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black/80 flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
