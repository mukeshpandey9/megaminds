import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { navbarItems } from "../../utils/navbarItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen({});
  };

  const toggleDropdown = (itemKey) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNavItems = (items, parentIndex = "") => {
    return items.map((item, index) => {
      const itemKey = parentIndex ? `${parentIndex}-${index}` : `${index}`;

      return (
        <div
          key={itemKey}
          className={`relative w-full ${parentIndex ? "pl-4" : ""}`}
        >
          {item.dropdown ? (
            <div
              onClick={() => toggleDropdown(itemKey)}
              className="flex transition-all ease-in-out h-full w-full gap-2 items-center justify-between cursor-pointer text-white px-4 py-2 hover:bg-gray-700 rounded duration-200"
            >
              {item.title}
              {dropdownOpen[itemKey] ? <GoChevronUp /> : <GoChevronDown />}
            </div>
          ) : (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex gap-2 w-full items-center justify-between text-white ${
                  isActive ? "font-semibold bg-orange-600" : "hover:bg-gray-700"
                } px-4 py-2 rounded transition-colors duration-200`
              }
            >
              {item.title}
            </NavLink>
          )}
          {item.dropdown && (
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                dropdownOpen[itemKey] ? "max-h-screen" : "max-h-0"
              }`}
            >
              {renderNavItems(item.dropdown, itemKey)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className="absolute transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 right-5 md:right-40 z-50"
      ref={navbarRef}
    >
      <button
        onClick={toggleMenu}
        className="bg-black w-full flex gap-3 items-center justify-between text-white p-3 rounded shadow-lg hover:bg-slate-700 text-3xl transition duration-300"
      >
        {menuOpen ? <LiaTimesSolid /> : <HiBars3BottomLeft />}
      </button>

      <div
        className={`fixed w-max top-0 right-12 bg-black shadow-lg rounded-lg transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <nav className="p-4 bg-black w-full space-y-2">
          {renderNavItems(navbarItems)}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
