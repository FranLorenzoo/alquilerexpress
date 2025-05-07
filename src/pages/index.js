import CuadradoAlquiler from "../../components/cuadradoAlquiler.js"
import Head from 'next/head'
import NavBar from "../../components/nav-bar.js"
import BarraBusqueda from "../../components/barra-busqueda.js"

export default function Pruebas (){

    return <>
        <Head>
            <title> Alquileres</title>
        </Head>

        <NavBar />
        
        <BarraBusqueda/>
 
      <main className="flex justify-center w-screen h-screen bg-blue-400">
                <div className="flex flex-col w-1/2 h-1/3 py-10 bg-blue-400">      
                    <CuadradoAlquiler nom="informatica" ciu="la plata" localidad="gorina" />
                    <CuadradoAlquiler nom="informatica" ciu="la plata" localidad="city bell" />
                </div>
      </main>
    </>
}