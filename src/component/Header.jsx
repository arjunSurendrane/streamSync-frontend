// src/components/Header.js
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="shadow-md p-3 flex justify-between items-center">
      {/* Brand Name */}
      <div className="text-xl font-bold">streamSync</div>

      {/* User Avatar and Dropdown */}
      <div className="relative cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full overflow-hidden">
            {/* Add the user avatar image or initials */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
