import { createClient } from './server';


export async function createReserva(reserva: {
  id: number,
  id_inmueble: number,
  fechaDesde: string,
  fechaHasta: string,
  cantidad: number,
  solicitante: number,
  pagoId: number
  estado: string, 

} ){
  const supabase = await createClient();

  const { error } = await supabase.from("reserva").insert(reserva);

  if (error) {
    throw new Error("Error al crear la reserva: " + error.message);
  }
}

  export async function getReservasPorInmueble(id_inmueble: number) {
    const supabase = await createClient();
  
    const { data, error } = await supabase
      .from("reserva")
      .select("*")
      .eq("id_inmueble", id_inmueble);
  
    if (error) {
      throw new Error("Error al obtener reservas: " + error.message);
    }
  
    return data;
}

    export async function cancelarReserva(id: number): Promise<void> {
        const supabase = await createClient() ;

        const { error } = await supabase 
            .from ("reserva")
            .update ({ esatado: "cancelada " })
            .eq("id" , id) ;
        if (error) {
            throw new Error(`Error al cancelar la reserva: ${error.message}`);
         }

            
    }

    export async function aceptarReserva(id: number): Promise<void> {
        const supabase = await createClient() ;

        const { error } = await supabase 
            .from ("reserva")
            .update ({ esatado: "aceptada " })
            .eq("id" , id) ;
        if (error) {
            throw new Error(`Error al aceptar la reserva: ${error.message}`);
         }

    }
    export async function eliminarReserva(id: number): Promise<void> {
        const supabase = await createClient() ;

        const { error } = await supabase 
            .from ("reserva")
            .delete ()
            .eq("id" , id) ;
        if (error) {
            throw new Error(`Error al eliminar la reserva: ${error.message}`);
         }

            
    }


  
