import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
        const response = await fetch('http://localhost:4000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
    
        if (response.ok) {
          console.log('Inicio de sesión exitoso:', result);
        } else {
          console.error('Error al iniciar sesión:', result);
        }
      } catch (error) {
        console.error('Error de conexión:', error);
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">Iniciar sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-300">Correo electrónico</label>
            <input
              type="text"
              {...register('email', { required: true })}
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nombre de usuario"
            />
          </div>
          <div>
            <label className="block text-gray-300">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full px-4 py-3 mt-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          ¿Olvidaste tu contraseña?{' '}
          <a href="/forgot-password" className="text-indigo-500 hover:underline">
            Recupérala aquí
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
