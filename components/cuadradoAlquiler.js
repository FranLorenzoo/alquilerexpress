export default function CuadradoAlquiler ({nom, ciu, localidad}){
    
    

    return <>
<div className="flex bg-yellow-500 rounded-lg  w-full p-4 items-center justify-between">
            <img 
                src="https://static.fotocasa.es/images/ads/24755404-8821-4632-ac79-87ca5769b5f0?rule=feed_640x480_jpg_70"
                className="w-24 h-20 object-cover rounded-lg"
                alt="inmueble"
            />

            <div className="flex flex-col text-sm px-4">
                <label>Nombre: {nom}</label>
                <label>Ciudad: {ciu}</label>
                <label>Localidad: {localidad}</label>
            </div>

            <div className="flex gap-2">
                <button className="bg-blue-300 rounded-xl px-3 py-1">Reservar</button>
                <button className="bg-blue-300 rounded-xl px-3 py-1">Ver Más</button>
            </div>
        </div>
    </> 
}