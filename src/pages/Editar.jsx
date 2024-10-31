import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthProvider';

function Editar() {
  const { register, handleSubmit } = useForm();
  const {user, login, logout} = useAuth()
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Datos registrados correctamente:', result);
        //Login
        
        login(data)
        console.log(data)
      } else {
        console.error('Error al registrar los datos:', result);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Video de fondo, AUN NO LO BUSCO */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10"
        src="/path-to-your-video.mp4" // videop buscar
      ></video>

      {/* Contenedor principal */}
      <div className="relative flex w-full max-w-5xl flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden bg-gray-800 bg-opacity-75 backdrop-blur-sm">
        
        {/* Lado izquierdo: Formulario de registro */}
        <div className="lg:w-1/2 w-full p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-4xl text-white font-bold text-center mb-8">Editar</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6">
                <label className='text-white'>Nombre</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={user.name}
                  defaultValue={user.name}
                />
                <label className='text-white'>Username</label>
                <input
                  type="text"
                  {...register('username', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={user.username}
                  defaultValue={user.username}
                />
                <label className='text-white'>Correo</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue={user.email}
                />
                <label className='text-white'>Contraseña</label>
                <input
                  type="text"
                  {...register('password', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Contraseña"
                  defaultValue={user.password}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-8 bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
              >
                Aplicar Cambios
              </button>
            </form>
          </div>
        </div>

        {/* Divisor */}
        <div className="hidden lg:flex lg:divider-vertical w-1 bg-gray-700"></div>

        {/* Lado derecho: Imagen responsiva */}
        <div className="lg:w-1/2 w-full p-10 flex items-center justify-center">
          <img
            src="/images/lobo.png" // Ruta de la imagen
            alt="Imagen de registro"
            className="w-full h-auto max-w-xs lg:max-w-md rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
}

export default Editar;
