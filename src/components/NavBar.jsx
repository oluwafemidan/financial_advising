import React from "react";
import { useState } from "react";
import { HiOutlineViewList, HiX } from "react-icons/hi";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  let navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact Us", link: "#contact" },
    { name: "Testimonial", link: "#testimonial" },
  ];
  return (
    <div className="flex flex-row  gap-6 text-lg sm:gap-6 md:gap-6  sm:text-lg font-medium  flex-wrap !overflow-hidden">
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7 mt-15"
        >
          {open ? <HiX size={28} /> : <HiOutlineViewList size={28} />}
        </div>
        <ul
          className={`lg:flex lg:items-center md:pb-0 pb-12 absolute lg:static bg-white/30 backdrop-blur-md md:z-auto z-[-1] left-0 right-0 lg:w-auto w-full rounded-md shadow-lg transition-all duration-500 ease-in ${
            open ? "top-12 mt-24" : "top-[-490px]"
          }`}
        >
          {navItems.map((nav) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={nav.name}>
              <a href={nav.link} className="text-gray-800 nav-hover-btn">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
