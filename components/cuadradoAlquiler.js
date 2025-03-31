export default function CuadradoAlquiler ({nom, ciu, localidad}){
    
    return <>
        <div  className="flex bg-yellow-500 rounded-lg h-20 w-full align-center text-lg ">
            <img src="https://static.fotocasa.es/images/ads/24755404-8821-4632-ac79-87ca5769b5f0?rule=feed_640x480_jpg_70" className="w-1/6 h=1/8 rounded-lg"></img>
            <div className="grid">
                <label className="px-2 ">
                    nombre:{nom} 
                </label>
                <label className="px-2 ">
                    ciudad:{ciu}
                </label>
                <lable className="px-2 ">
                    localidad:{localidad}
                </lable>
            </div>
            <div className="flex justify-end h-12 w-150 pt-5">
                <button className=" bg-blue-300  rounded-xl w-1/6 h-10 mx-4">Reservar </button>
                <button className=" bg-blue-300  rounded-xl w-1/6 h-10">Ver Mas </button>
            </div>
        </div>    
    </> 
}