import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="NASI Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold text-nasi-maroon">
            NASI Technologies
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-nasi-maroon">Home</a>
          <a href="#about" className="hover:text-nasi-maroon">About</a>
          <a href="#services" className="hover:text-nasi-maroon">Services</a>
          <a href="#contact" className="hover:text-nasi-maroon">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nasi-maroon focus:outline-none text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 space-y-2 text-center">
          {["hero", "about", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-gray-700 hover:text-nasi-maroon"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
