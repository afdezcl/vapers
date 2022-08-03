export const Hero = () => {
  return (
    <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h2 className="text-2xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Disfruta de los mejores
        </h2>
        <h1 className="text-5xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            VAPERS
          </span>
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          Encuentra tu sabor favorito en nuestra lista de productos
        </p>

        <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 text-center">
            <label className="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
              Inhala el sabor de las cosas buenas
            </label>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white text-lg font-bold px-12 py-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Ver catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}