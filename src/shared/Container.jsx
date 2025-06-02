import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-8xl w-full px-5 sm:px-8 md:px-14 lg:px-20  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
