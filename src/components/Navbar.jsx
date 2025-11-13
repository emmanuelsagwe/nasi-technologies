import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import About from "./About"; // import the About component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openAbout = () => {
    setShowAbout(true);
    setIsOpen(false);
  };
  const closeAbout = () => setShowAbout(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="NASI Logo" className="h-10 w-10 opacity-80" />
            <h1
              className="text-2xl font-bold text-nasi-maroon cursor-pointer"
              onClick={openAbout}
            >
              NASI Technologies
            </h1>
          </div>

          {/* Hamburger Menu */}
          <button
            className="text-white md:text-nasi-maroon text-3xl focus:outline-none z-50 relative"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay for menu or About */}
      {(isOpen || showAbout) && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm"
          onClick={() => { setIsOpen(false); closeAbout(); }}
        ></div>
      )}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 z-50 bg-nasi-maroon text-white py-10 px-6 flex flex-col space-y-6">
          <a
            href="#services"
            className="text-lg font-semibold hover:underline text-left"
            onClick={toggleMenu}
          >
            Services
          </a>
          <button
            className="text-lg font-semibold hover:underline text-left"
            onClick={openAbout}
          >
            Our Company
          </button>
          <a
            href="#contact"
            className="text-lg font-semibold hover:underline text-left"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}

      {/* About / Our Company panel */}
      {showAbout && (
        <div className="fixed top-0 left-0 h-full w-80 z-50 bg-white p-6 overflow-auto shadow-lg">
          <button
            className="mb-4 text-nasi-maroon font-bold text-xl"
            onClick={closeAbout}
          >
            Close ✕
          </button>
          <About />
        </div>
      )}
    </>
  );
}
