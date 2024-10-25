import { useForm } from 'react-hook-form';

function RegisterPage() {
  const { register, handleSubmit } = useForm();

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
      } else {
        console.error('Error al registrar los datos:', result);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Contenedor principal */}
      <div className="flex w-full max-w-5xl flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden bg-gray-800">
        
        {/* lado izquierdo formulario de registro */}
        <div className="lg:w-1/2 w-full p-10 flex items-center justify-center bg-gray-900">
          <div className="w-full max-w-md">
            <h2 className="text-4xl text-white font-bold text-center mb-8">Crea tu cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nombre completo"
                />
                <input
                  type="text"
                  {...register('username', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nombre de usuario"
                />
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Correo electrónico"
                />
                <input
                  type="password"
                  {...register('password', { required: true })}
                  className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Contraseña"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-8 bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>

        {/* divisor */}
        <div className="hidden lg:flex lg:divider-vertical w-1 bg-gray-700"></div>

        {/* lado derecho ponemos la imagen */}
        <div className="lg:w-1/2 w-full p-10 flex items-center justify-center bg-gray-900">
          <img
            src="/path/to/image.png" //imagem buscaaar
            alt="Imagen de registro"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;
