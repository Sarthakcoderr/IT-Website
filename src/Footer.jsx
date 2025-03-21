import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Dayal Infosystems</h2>
          <p className="text-gray-400">
            We provide high-quality software solutions to streamline your business.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/erp" className="hover:text-blue-400 transition">ERP Solutions</NavLink>
            </li>
            <li>
              <NavLink to="/ecommerce" className="hover:text-blue-400 transition">E-Commerce</NavLink>
            </li>
            <li>
              <NavLink to="/crm" className="hover:text-blue-400 transition">CRM Systems</NavLink>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
          <li>
              <NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400 transition">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/career" className="hover:text-blue-400 transition">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400 transition">Contact Us</NavLink>
            </li>
            
          </ul>
        </div>

        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

     
      <hr className="border-gray-700 my-6" />

      
      <div className="text-center text-gray-400">
        © {new Date().getFullYear()} Dayal Infosystems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
