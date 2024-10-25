import React, { Component } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; 
import 'daisyui/dist/full.css'; 

export default class Agregarp extends Component {
  state = {
    productos: [],
    nuevoProducto: {
      name: '',
      precio: '',
      descripcion: '',
      imagen: '', // campo para la URL de la imagen
    },
  };

  async componentDidMount() {
    await this.fetchProductos();
  }

  fetchProductos = async () => {
    const res = await axios.get('http://localhost:4000/api/producto');
    this.setState({ productos: res.data });
    console.log(this.state.productos);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      nuevoProducto: {
        ...prevState.nuevoProducto,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/producto', this.state.nuevoProducto);
      this.setState({ 
        nuevoProducto: { name: '', precio: '', descripcion: '', imagen: '' } // Resetear formulario
      });
      await this.fetchProductos(); // Obtener la lista actualizada de productos
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  render() {
    return (
      <div className="container mx-auto mt-10 p-6 rounded-lg shadow-xl bg-gradient-to-r from-gray-100 to-gray-300">
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">Agregar Producto</h1>
        
        {/* Formulario de agregar producto */}
        <form onSubmit={this.handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-200">
          {/* Campo Nombre */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-gray-700 text-left">Nombre:</label>
            <input
              type="text"
              placeholder="Escribe el nombre aquí"
              className="input input-bordered input-lg w-full p-4 rounded-lg shadow-sm border border-gray-300 transition duration-200 focus:border-blue-600 focus:ring focus:ring-blue-200"
              name="name"
              value={this.state.nuevoProducto.name}
              onChange={this.handleChange}
              required
            />
          </div>
          
          {/* Campo Precio */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-gray-700 text-left">Precio:</label>
            <input
              type="number"
              placeholder="Escribe el precio aquí"
              className="input input-bordered input-lg w-full p-4 rounded-lg shadow-sm border border-gray-300 transition duration-200 focus:border-blue-600 focus:ring focus:ring-blue-200"
              name="precio"
              value={this.state.nuevoProducto.precio}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Campo Descripción */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-gray-700 text-left">Descripción:</label>
            <textarea
              placeholder="Escribe la descripción aquí"
              className="textarea textarea-bordered w-full p-4 rounded-lg shadow-sm border border-gray-300 transition duration-200 focus:border-blue-600 focus:ring focus:ring-blue-200"
              name="descripcion"
              value={this.state.nuevoProducto.descripcion}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Campo URL de la Imagen */}
          <div className="form-group">
            <label className="block text-lg font-semibold text-gray-700 text-left">URL de la Imagen:</label>
            <input
              type="text"
              placeholder="Escribe la URL de la imagen aquí"
              className="input input-bordered input-lg w-full p-4 rounded-lg shadow-sm border border-gray-300 transition duration-200 focus:border-blue-600 focus:ring focus:ring-blue-200"
              name="imagen"
              value={this.state.nuevoProducto.imagen}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block rounded-lg shadow-lg transition duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold">Agregar Producto</button>
        </form>

        <h2 className="mt-10 text-center text-3xl font-bold text-gray-800">Lista de Productos</h2>
        
        <div className="overflow-x-auto mt-5 bg-white p-4 rounded-lg shadow-md">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="bg-gray-100">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="p-2 text-left">Nombre</th>
                <th className="p-2 text-left">Precio</th>
                <th className="p-2 text-left">Descripción</th>
                <th className="p-2 text-left">Imagen</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.productos.map((producto) => (
                <tr key={producto._id} className="hover:bg-gray-50 transition duration-200">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="p-2">{producto.name}</td>
                  <td className="p-2">${producto.precio}</td>
                  <td className="p-2">{producto.descripcion}</td>
                  <td className="p-2">
                    <img
                      src={producto.imagen}
                      alt={producto.name}
                      className="w-12 h-12 rounded-full"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/50"; }}
                    />
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Detalles</button>
                  </th>
                </tr>
              ))}
            </tbody>
           
          </table>
        </div>
      </div>
    );
  }
}
