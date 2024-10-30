import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; 
import 'daisyui/dist/full.css'; 

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-200 fixed top-0 left-0 w-full z-10 px-4">
      <div className="flex justify-between w-full">
        <div className="flex-1">
          <Link className="text-6xl btn btn-ghost " to="/">Artesanías de Oaxaca</Link>
        </div>
        <div className="flex-none">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="btn btn-ghost">
              {/* Ícono de menú hamburguesa */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul className={`menu menu-horizontal px-1 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <li>
              <Link className="nav-link" to="/principal">Nosotros</Link>
            </li>
            <li>
              <Link className="nav-link" to="#">Tendencias</Link>
            </li>
            {/* ...resto de tus enlaces */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
