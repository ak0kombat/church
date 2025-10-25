import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const SideMenu = ({ open, onClose }) => {
  return (
    // Overlay
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      {/* Side menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-green text-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-end p-4">
          <MdClose className="text-3xl cursor-pointer" onClick={onClose} />
        </div>
        <nav className="flex flex-col gap-6 px-8 mt-8 text-lg">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/Mass_Timings" onClick={onClose}><li>Mass Timings</li></Link>
          <Link to="/fathers" onClick={onClose}>Our Fathers</Link>
          <Link to="/Constructions" onClick={onClose}>Constructions</Link>
          <Link to="/material" onClick={onClose}>Materials</Link>
          <Link to="/about" onClick={onClose}>About</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideMenu;
