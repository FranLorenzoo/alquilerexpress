import CuadradoAlquiler from "../../components/cuadradoAlquiler.js"
import Head from 'next/head'
export default function Pruebas (){

    return <>
        <Head>
            <title> Alquileres</title>
        </Head>
        <main className="flex justify-center w-screen h-screen bg-black">
            <div className="flex flex-col w-1/2 h-1/3 py-10 bg-black ">      
            <CuadradoAlquiler className="w-1/2"nom="informatica" ciu="la plata" localidad="gorina"/>
            </div>
            <div className="flex flex-col w-1/2 h-1/3 py-10 bg-black ">      
            <CuadradoAlquiler className="w-1/2"nom="informatica" ciu="la plata" localidad="gorina"/>
            </div>
        </main>
    </>
}