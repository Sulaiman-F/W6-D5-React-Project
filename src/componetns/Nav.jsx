import React from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
const Navlinks = [
  { path: "/", label: "GAME" },
  { path: "/about", label: "ABOUT" },
  { path: "/search-job", label: "CAREERS" },
  { path: "/support", label: "SUPPORT" },
];

function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center bg-black/70  md:px-24 h-15 text-sm fixed  top-0 w-full border-b border-white/80 z-50">
        <div className="flex items-center justify-between w-full md:w-auto lg:justify-normal  space-x-15">
          <div className="md:hidden">
            <FaBars className="text-white text-2xl cursor-pointer" />
          </div>
          <Link to="/">
            <img
              className="w-32 h-7 cursor-pointer object-contain"
              src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
              alt="Logo"
            />
          </Link>
          <ul className="hidden lg:flex space-x-10">
            {Navlinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-gray-300 hover:text-white">
                  {item.label}
                  {item.label !== "GAME" ? (
                    <IoIosArrowDown className="inline-block ml-1 text-lg" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <div className="block md:hidden text-white/0">.</div>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <button className="bg-sky-700/50 border border-sky-600 text-white font-medium px-3 py-1 rounded-3xl hover:bg-sky-600/50 hover:border-sky-500 cursor-pointer">
            SIGN UP
          </button>
          <button className=" text-gray-300 cursor-pointer hover:text-white">
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
