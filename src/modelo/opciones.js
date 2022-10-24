import CondicionIva from "./condiciones-iva.js";
import AplicacionCreadaCon from "./aplic-creada-con.js";

export class OpcionesClass {
    constructor() {
        this.nombreEmpresa = '';
        this.condicionFrenteAlIva = CondicionIva.Mono;
        this.agenteRetencion = false;
        this.importador = false;
        this.aplic_creada_con = AplicacionCreadaCon.vite;
        this.calificacion = 10;
    }
}

