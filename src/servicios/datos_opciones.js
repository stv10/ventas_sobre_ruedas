import CondicionIva from "../modelo/condiciones-iva.js";
import AplicacionCreadaCon from "../modelo/aplic-creada-con.js";

let appOpciones = {
    nombreEmpresa: '',
    condicionFrenteAlIva: CondicionIva.Mono,
    agenteRetencion: false,
    importador: false,
    aplic_creada_con: AplicacionCreadaCon.cra,
    calificacion: 10
};

export function getOpciones() {
    return appOpciones;
}

export function guardarOpciones(opc) {
    appOpciones = opc;
}
