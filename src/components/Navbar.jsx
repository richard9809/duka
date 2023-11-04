import React, { useState } from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [toggle, isToggle] = useState(false);

  const toggleMenu = () => {
    isToggle(!toggle);
  };

  return (
    <nav className="flex justify-between items-center py-8 px-8 border-b">
      {/* <img src={Logo} width={50} /> */}
      <i className="fa-solid fa-snowflake text-6xl text-green-900"></i>

      <button
        data-collapse-toggle="navbar-default"
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded={toggleMenu ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div className={isToggle ? "block w-full md:w-auto" : "hidden md:block w-auto"} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-green-900 md:hover:underline"
              aria-current="page"
            >
              Electronics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Jewellery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Men's Clothing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Women's Clothing
            </a>
          </li>
        </ul>
      </div>

      <div className={isToggle ? "hidden md:flex gap-6" : "flex gap-6 md:flex"} >
        <a href="">
          <i className="fa fa-search text-2xl hover:text-green-900 text-gray-500"></i>
        </a>
        <a href="">
          <i className="fa fa-user text-2xl hover:text-green-900 text-gray-500"></i>
        </a>
        <a href="">
          <i className="fa fa-bag-shopping text-2xl hover:text-green-900 text-gray-500"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
