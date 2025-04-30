import CuadradoAlquiler from "../../components/cuadradoAlquiler.js"
import Head from 'next/head'
export default function Pruebas (){

    return <>
        <Head>
            <title> Alquileres</title>
        </Head>
        <main className="bg-black">
            <div className="flex h-30 w-200 pt-10 mx-300">
                <button className=" bg-blue-200  rounded-xl w-1/4 h-10 mx-2" >Cerrar sesion</button>
                <button className=" bg-blue-200  rounded-xl w-1/4 h-10">Ver Perfil</button>
            </div>
            <div className="ps-30 text-3xl text-white pb-8">    
                Bienvenido a Alquileres express
            </div>
            <div className="ps-50 w-1/1 h-1/4 ">      
                <CuadradoAlquiler className="w-1/2"nom=" Casa " ciu=" La Plata " localidad=" Gonnet " tipo= " Inmueble" imagen= "https://static.fotocasa.es/images/ads/24755404-8821-4632-ac79-87ca5769b5f0?rule=feed_640x480_jpg_70"/>
                <CuadradoAlquiler className="w-1/2"nom=" Casa " ciu=" La Plata " localidad=" Gonnet " tipo= " Inmueble" imagen= "https://media.istockphoto.com/id/1470006282/es/foto/se-vende-cartel-de-bienes-ra%C3%ADces-frente-a-casa-nueva.jpg?s=612x612&w=0&k=20&c=WcZ8BP3au7Qj3HnW42qJpyM0wNbAGNkoD0WtW5Z7cos="/>     
                <CuadradoAlquiler className="w-1/2"nom=" Casa " ciu=" La Plata " localidad=" Gonnet " tipo= " Inmueble" imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8DYnUVh3LLlTK2MfqVVwJUlEJdlVTzU0wg&s"/>
                <CuadradoAlquiler className="w-1/2"nom=" Casa " ciu=" La Plata " localidad=" Gonnet " tipo= " Inmueble" imagen= "https://static.fotocasa.es/images/ads/24755404-8821-4632-ac79-87ca5769b5f0?rule=feed_640x480_jpg_70"/>
                <CuadradoAlquiler className="w-1/2"nom=" Casa " ciu=" La Plata " localidad=" Gonnet " tipo= " Inmueble" imagen= "https://static.fotocasa.es/images/ads/24755404-8821-4632-ac79-87ca5769b5f0?rule=feed_640x480_jpg_70"/>
            </div>
        </main>
    </>
}