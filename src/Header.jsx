
import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scrolled?"bg-gray-900 ":"bg-transparent"} transition-all duration-500 bg-opacity-90 text-white shadow-lg py-1 px-6 md:px-12 flex items-center justify-between fixed top-0 w-full z-50`}>
      {/* Logo */}
      <NavLink to="/">
        <img src="/infosystems.png" alt="Logo" className="h-16 w-auto" />
      </NavLink>
      
      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg ">
        <NavLink to="/" className={({ isActive }) => `relative pb-2 transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `relative pb-2 transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>About Us</NavLink>
        <NavLink to="/product" className={({ isActive }) => `relative pb-2 transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Products</NavLink>
        <NavLink to="/career" className={({ isActive }) => `relative pb-2 transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Career</NavLink>
      </nav>
      
      {/* Contact Us Button */}
      <NavLink to="/contact" className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-600 transition">
        Contact Us
      </NavLink>
      
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-5 flex flex-col space-y-4 md:hidden">
          <NavLink to="/" className={({ isActive }) => `text-white transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-white transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>About Us</NavLink>
          <NavLink to="/product" className={({ isActive }) => `text-white transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Products</NavLink>
          <NavLink to="/career" className={({ isActive }) => `text-white transition ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}`}>Career</NavLink>
          <NavLink to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition text-center">
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
