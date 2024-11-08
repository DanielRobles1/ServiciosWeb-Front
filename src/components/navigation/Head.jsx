import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; 
import 'daisyui/dist/full.css';

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 px-4">
      {/* Menú a la izquierda */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${isOpen ? 'block' : 'hidden'}`}>
            <li><Link to="/principal">Nosotros</Link></li>
            <li><Link to="#">Tendencias</Link></li>
            <li><Link to="/regispro">Agregar Producto</Link></li>
          </ul>
        </div>
      </div>

      {/* Centro de la navbar */}
      <div className="navbar-center">
        <a href="/" className="btn btn-ghost text-xl">
          {/* Icono de casa para pantallas pequeñas y texto para pantallas medianas y grandes */}
          <span className="hidden md:inline">Artesanías de Oaxaca</span>
          <svg className="inline-block h-6 w-6 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-10 0a1 1 0 001 1h3m10-11H9" />
          </svg>
        </a>
      </div>

      {/* Íconos y enlaces a la derecha */}
      <div className="navbar-end">
        {/* Carrito de Compras */}
        <button className="btn btn-ghost btn-circle mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>

        {/* Ícono de Notificación */}
        <button className="btn btn-ghost btn-circle mr-2">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Avatar de Usuario con opciones de sesión */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/registroU">Registrarse</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            <li><Link to="/settings">Configuraciones</Link></li>
            <li><Link to="/logout">Cerrar sesión</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Head;
