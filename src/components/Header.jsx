import React from "react";
import buildImg from "/building_3.jpeg";
import logoImg from "/EFA_logo.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className=" relative h-screen w-screen">
      <img
        src={buildImg}
        alt="building"
        className="h-screen w-screen absolute top-0 left-0 z-0"
      />
      <div className="relative top-0 left-0 z-50 w-full flex flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-0 flex-wrap">
        <img
          src={logoImg}
          alt="financial advising logo"
          className="w-60 h-60 py-0 px-0"
        />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;

//
