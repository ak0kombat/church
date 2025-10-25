import React, { useState } from "react";
import { Link } from "react-router-dom";
import churchLogo from "../assets/churchImg/logoChurch.jpg";
import useMobile from "../hooks/useMobileResponsive";
import { MdMenu } from "react-icons/md";

// Dummy SideMenu component for demonstration
const SideMenu = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/40 z-50 flex">
    <div className="bg-white w-64 h-full shadow-lg p-6">
      <button className="mb-4 text-green-700" onClick={onClose}>Close</button>
      <ul className="flex flex-col gap-4 text-lg">
        <Link to="/" onClick={onClose}><li>Home</li></Link>
        <Link to="/Mass_Timings" onClick={onClose}><li>Mass Timings</li></Link>
        <Link to="/fathers" onClick={onClose}><li>Our Fathers</li></Link>
        <Link to="/Construction" onClick={onClose}><li>Construction</li></Link>
        <Link to="/material" onClick={onClose}><li>Materials</li></Link>
        <Link to="/about" onClick={onClose}><li>About</li></Link>
        <Link to="/contact" onClick={onClose}><li>Contact</li></Link>
      </ul>
    </div>
    <div className="flex-1" onClick={onClose} />
  </div>
);

const Navbar = () => {
  const [isMobile] = useMobile();
  const [forSideMenuOpen, setForSideMenuOpen] = useState(false);

  return (
    <section className="bg-green w-full h-full">
      <nav className="flex items-center justify-between">
        <Link to={"/"}>

          <img src={churchLogo} className="h-20 md:h-22 w-40" />
        </Link>
        {isMobile ? (
          <ul className="ul-nav flex text-xl gap-6 me-3 text-white">
            <Link to="/" className="hover:text-gray-300">
              <li className="li-nav active">Home</li>
            </Link>
            <Link to="/Mass_Timings" className="hover:text-gray-300">
              <li className="li-nav active">Mass Timings</li>
            </Link>
            <Link to="/fathers" className="hover:text-gray-300">
              <li className="li-nav">Our Fathers</li>
            </Link>
            <Link to="/Constructions" className="hover:text-gray-300">
              <li className="li-nav">Constructions</li>
            </Link>
            <Link to="/material" className="hover:text-gray-300">
              <li className="li-nav">Materials</li>
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              <li className="li-nav">About</li>
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              <li className="li-nav">Contact</li>
            </Link>
          </ul>
        ) : (
          <MdMenu
            className="text-4xl text-white hover:text-gray-300 me-4 cursor-pointer"
            onClick={() => setForSideMenuOpen(true)}
          />
        )}
      </nav>
      {forSideMenuOpen && (
        <SideMenu onClose={() => setForSideMenuOpen(false)} />
      )}
    </section>
  );
};

export default Navbar;
