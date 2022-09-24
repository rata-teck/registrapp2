import { Seccion } from "./seccion";

export interface Alumno {
  nombre : string,
  usuario : string,
  clave : string,
  secciones : Array<Seccion>
}
