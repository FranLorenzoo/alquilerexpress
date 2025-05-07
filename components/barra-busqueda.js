export default function BarraBusqueda () {

    return <>
    <div className="w-full flex justify-center m-4">
    <form className="flex flex-wrap gap-4 bg-white rounded-xl shadow-lg px-6 py-4 w-3/4 justify-center items-center">
        {/* Campo de búsqueda libre */}
        <input
          type="text"
          placeholder="Buscar por ciudad, zona..."
          className="flex-grow min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />

        {/* Filtro: tipo de inmueble */}
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option value="">Tipo</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="ph">PH</option>
        </select>

        {/* Filtro: precio mínimo */}
        <input
          type="number"
          placeholder="Precio mín."
          className="w-32 px-4 py-2 border border-gray-300 rounded-lg"
        />

        {/* Filtro: precio máximo */}
        <input
          type="number"
          placeholder="Precio máx."
          className="w-32 px-4 py-2 border border-gray-300 rounded-lg"
        />

        {/* Filtro: huéspedes */}
        <input
          type="number"
          placeholder="Huéspedes"
          className="w-28 px-4 py-2 border border-gray-300 rounded-lg"
        />

        {/* Botón de búsqueda */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Buscar
        </button>
      </form>
    </div>
    </>
}