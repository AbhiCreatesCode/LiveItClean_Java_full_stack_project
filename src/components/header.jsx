import { useState } from "react";
import "tailwindcss";
import logo from "../assets/download_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);
  const handleOptionClick = () => setMenuOpen(false); // Closes menu on option click

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="logo-container flex items-center justify-center">
            <img
              alt="LiveItClean logo"
              className="logo"
              src={logo}
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            />
          </div>
          <span className="ml-2 text-xl font-bold text-green-700">LiveItClean</span>
        </div>

        {/* Search & Menu Section */}
        <div className="flex items-center space-x-4">
          <input
            className="px-4 py-2 border rounded-full"
            placeholder="Search..."
            type="text"
          />

          {/* Dropdown Menu */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="px-4 py-2 border rounded-full text-green-700">
              Menu <i className="fas fa-caret-down"></i>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#" onClick={handleOptionClick}>Home</a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#" onClick={handleOptionClick}>Marketplace</a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#" onClick={handleOptionClick}>Tracker</a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#" onClick={handleOptionClick}>Community</a>
              </div>
            )}
          </div>

          {/* Login Button */}
          <button className="px-4 py-2 border rounded-full text-green-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
