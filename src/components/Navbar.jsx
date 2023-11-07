import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const tabs = [
    {
      id: 5,
      name: "Home",
      to: "/",
    },
    {
      id: 1,
      name: "Electronics",
      to: "/electronics",
    },
    {
      id: 2,
      name: "Jewellery",
      to: "/jewellery",
    },
    {
      id: 3,
      name: "Men's Clothing",
      to: "/men",
    },
    {
      id: 4,
      name: "Women's Clothing",
      to: "/women",
    },
  ];

  const icons = [
    {
      id: 1,
      iconName: "fa fa-search",
    },
    {
      id: 2,
      iconName: "fa fa-user",
    },
    {
      id: 3,
      iconName: "fa fa-bag-shopping",
    },
  ];

  const location = useLocation();

  const [isToggle, setIsToggle] = useState(false);

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className=" items-center py-6 px-8 border-b shadow-md">
      {/* <img src={Logo} width={50} /> */}
      <div>
        <i className="fa-solid fa-snowflake text-6xl text-green-900"></i>
      </div>

      <button
        className="mobile-nav-toggle md:hidden"
        onClick={toggleMenu}
        aria-controls="primary-navigation"
        aria-expanded={isToggle ? "true" : "false"}
      >
        <span className="hidden">Menu</span>
      </button>

      <nav
        id="primary-navigation"
        data-visible={isToggle ? "true" : "false"}
        className="primary-navigation md:flex md:items-center md:justify-between"
      >
        <ul role="list" className="md:flex md:gap-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link
                to={tab.to}
                className={`block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 
                    md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:hover:underline 
                    md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                    dark:hover:text-white md:dark:hover:bg-transparent 
                    ${
                      location.pathname === tab.to
                        ? "text-green-900 font-bold"
                        : ""
                    }`}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 py-4 px-2.5 relative">
          {icons.map((icon) => (
            <Link
              role="button"
              key={icon.id}
              to={icon.iconName === "fa fa-bag-shopping" ? "/cart" : ""}
            >
              <i
                className={`${icon.iconName} text-2xl hover:text-green-900 text-gray-500`}
              ></i>
              {icon.iconName === "fa fa-bag-shopping" && (
                <span className="bg-green-700 text-white text-xs font-medium absolute top-3  px-1.5 py-0.5 rounded-xl">
                  3
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
