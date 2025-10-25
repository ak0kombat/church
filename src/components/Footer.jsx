import React from "react";
import churchLogo from "../assets/churchImg/logoChurch.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green text-white pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Info */}
        <aside className="flex flex-col items-center md:items-start gap-3">
          <img src={churchLogo} className="w-28 h-20 object-cover rounded shadow-lg mb-2" alt="Church Logo" />
          <p className="font-bold text-xl">St. Mary's Church</p>
          <span className="font-light text-sm text-gray-200 mb-2 text-center md:text-left">
            Where faith, love, and community come together.
          </span>
          <div className="flex flex-col gap-1 text-gray-300 text-sm">
            <span>Phone: (123) 456-7890</span>
            <span>Email: contact@churchname.org</span>
          </div>
          
        </aside>
        {/* Quick Links */}
        <nav className="flex flex-col gap-2">
          <h4 className="text-lg text-white mb-2">Quick Links</h4>
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">Home</Link>
          <Link to={"/Mass Timings"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">Mass Timings</Link>
          <Link to={"/fathers"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">Our Fathers</Link>
          <Link to={"/Constructions"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">Constructions</Link>
          <Link to={"/material"} onClick={() => window.scrollTo(0, 0)}className="hover:text-yellow-400 transition">Materials</Link>
          <Link to={"/about"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">About</Link>
          <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)} className="hover:text-yellow-400 transition">Contact</Link>
        </nav>
        {/* Stay Connected */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg text-white mb-2">Stay Connected</h4>
          <p className="text-gray-200">"Receive updates and inspiration from the church"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
