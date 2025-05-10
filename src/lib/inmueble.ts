import { createClient } from "./server";
import { estadoInmueble } from "../../../.next/types/estados";

export async function buscarInmuebles(filtros: {
  localidad?: string;
  cantidadHuespedes?: number;
  estado?: estadoInmueble;
  espacioCochera?: number;
}) {
  const supabase = await createClient();

  let query = supabase.from("inmueble").select("*");

  if (filtros.localidad) {
    query = query.ilike("localidad", `%${filtros.localidad}%`);
  }
  if (filtros.cantidadHuespedes) {
    query = query.gte("cantidadHuespedes", filtros.cantidadHuespedes);
  }
  if (filtros.estado) {
    query = query.eq("estado", filtros.estado);
  }
  if (filtros.espacioCochera !== undefined) {
    query = query.gte("espacioCochera", filtros.espacioCochera);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Error al buscar inmuebles: ${error.message}`);
  }

  return data;
}