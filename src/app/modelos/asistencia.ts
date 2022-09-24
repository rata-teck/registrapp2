import { Alumno } from "./alumno";
import { Seccion } from "./seccion";

export interface Asistencia {
  fecha : number,
  alumno : Alumno,
  seccion : Seccion
}
