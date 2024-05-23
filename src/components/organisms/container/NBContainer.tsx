"use client";
import { useState } from "react";

const NavBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform p-5 md:sticky ${
          isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-96"
        } bg-gray-800 p-5 transition-all duration-300 ease-in-out`}
      >
        <button className="text-white" onClick={toggleSidebar}>
          Close
        </button>
        {/* <nav>
          <ul>
            <li className="text-white">Menu Item 1</li>
            <li className="text-white">Menu Item 2</li>
            <li className="text-white">Menu Item 3</li>
          </ul>
        </nav> */}
      </div>
      {/* Main Content */}
      <div>
        <button
          className="rounded bg-emerald-500 p-2 text-white"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
};

export default NavBarContainer;
