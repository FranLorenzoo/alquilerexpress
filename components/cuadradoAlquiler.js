export default function CuadradoAlquiler ({nom, ciu, localidad, tipo, imagen}){
    
    return <>
        <div  className="flex bg-yellow-600 rounded-lg h-35 w-300 text-lg ">
            <img src= {imagen} className="w-1/6 h=1/8 rounded-lg"></img>
            <div className="grid">
                <label className="px-2 ">
                    Nombre:{nom} 
                </label>
                <label className="px-2 ">
                    Ciudad:{ciu}
                </label>
                <lable className="px-2 ">
                    Localidad:{localidad}
                </lable>
                <lable className="px-2 ">
                    Tipo:{tipo}
                </lable>
            </div>
            <div className="grid h-30 w-80 pt-7 pl-150">
                <button className=" bg-blue-200  rounded-xl w-30 h-10 ">Reservar </button>
                <button className=" bg-blue-200  rounded-xl w-30 h-10 ">Ver Mas </button>
            </div>
        </div>    
    </> 
}
