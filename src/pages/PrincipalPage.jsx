

import React from "react";
import { useAuth } from "../context/AuthProvider";

function PrincipalPage() {
  const {user, login, logout} = useAuth();
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
     
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <div className="relative text-center text-white z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">
            Bienvenidos a Artesanías Artesa {user.name}
          </h1>
          <p className="text-2xl mb-8">
            Donde cada pieza cuenta una historia única
          </p>
          <button className="px-8 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 shadow-lg">
            Descubre más
          </button>
        </div>
      </section>

     
      <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-100 to-yellow-50">
        <h2 className="text-4xl font-semibold mb-6">Quiénes Somos</h2>
        <img src="/path/to/artesanos.jpg" alt="Artesanos trabajando" className="w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg" />
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          En Artesa, nos dedicamos a preservar y promover el arte artesanal.
          Cada pieza es elaborada por manos expertas que plasman tradición,
          cultura y creatividad en cada detalle.
        </p>
      </section>

     
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/*  producto */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <img
              src="/path/to/product1.jpg"
              alt="Producto Artesanal 1"
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Producto Artesanal 1</h3>
            <p className="text-gray-600 mb-4">
              Descripción breve del producto.
            </p>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 shadow-md">
              Ver más
            </button>
          </div>
          {/*añadir mas productos*/}
        </div>
      </section>

      {/* sesion de contacto a la empreso*/}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-50 to-yellow-100">
        <h2 className="text-4xl font-semibold mb-8">Contáctanos</h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          ¿Quieres saber más sobre nuestros productos? ¡Escríbenos!
        </p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg h-32 focus:border-yellow-500 focus:ring-yellow-500"
          ></textarea>
          <button className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 shadow-md">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </div>
  );
}

export default PrincipalPage;
