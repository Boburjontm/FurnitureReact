import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/img/logo.svg"; // 

// Ensure the correct icon paths
import userIcon from "/img/human.svg";
import heartIcon from "/img/heart.svg";
import searchIcon from "/img/search.svg";
import cartIcon from "/img/shop.svg";
import hamburgerIcon from "/img/shop.svg"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Furniro Logo" className="h-10 mr-4" />
        </div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <img src={hamburgerIcon} alt="Menu" className="h-8" />
          </button>
        </div>

        {/* Navigation - default hidden on mobile */}
        <nav
          className={`md:flex space-x-6 items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-600 hover:text-yellow-600">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-yellow-600">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-yellow-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/account" className="text-gray-600 hover:text-yellow-600">
            <img src={userIcon} alt="User Account" className="h-6" />
          </Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-yellow-600">
            <img src={heartIcon} alt="Wishlist" className="h-6" />
          </Link>
          <Link to="/search" className="text-gray-600 hover:text-yellow-600">
            <img src={searchIcon} alt="Search" className="h-6" />
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-yellow-600">
            <img src={cartIcon} alt="Shopping Cart" className="h-6" />
          </Link>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="bg-white shadow-md py-4 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-600 hover:text-yellow-600">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-yellow-600">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-yellow-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
