import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); 

  return (
    <header className="bg-[#1E3A8A] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">SchoolMS</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
          {user?.loggedIn ? (
            <button onClick={logout} className="hover:text-gray-200">Logout</button>
          ) : (
            <Link to="/login" className="hover:text-gray-200">Login</Link>
          )}
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <Link to="/home" className="block hover:text-gray-200">Home</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact Us</Link>
          {user?.loggedIn ? (
            <button onClick={logout} className="block hover:text-gray-200 w-full text-left">Logout</button>
          ) : (
            <Link to="/login" className="block hover:text-gray-200">Login</Link>
          )}
          <Link to="/about" className="block hover:text-gray-200">About Us</Link>
          <Link to="/services" className="block hover:text-gray-200">Services</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
