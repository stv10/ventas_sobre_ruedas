import axios from "axios";
import { urlServidor } from "../constantes";

const datos_motos = [
    {id: 1, marca: 'Honda', cilindros: 3, color: 'rojo'},
    {id: 2, marca: 'Honda', cilindros: 4, color: 'verde'},
    {id: 3, marca: 'Toyota', cilindros: 3, color: 'amarillo'},
    {id: 4, marca: 'Siambretta', cilindros: 2, color: 'blanco'},
];

export async function getDatos() {
    let datos_motos = [];
    try {
        let response = await axios.get(`${urlServidor}/motos`);
        datos_motos = response.data;
    } catch (e) {
        console.log("Error al traer las motos " + e);
    }
    return datos_motos;
}

export async function getMoto(id) {
    let moto = {};
    try {
        let res = await axios.get(`${urlServidor}/motos/${id}`)
        moto = res.data;
    } catch (e) {
        console.log("No se pudo encontrar la moto" + e);
    }
    return moto;
}

export async function grabarMoto(moto) {
    if (!moto.id) {
        axios.post(`${urlServidor}/motos`, { ...moto, id: null })
        .catch(error => console.log(`Error al agregar: ${error}`));
    } else {
        axios.put(`${urlServidor}/motos/${moto.id}`, moto)
        .catch(error => console.log(`Error al editar: ${error}`));
    }
}

export async function borrarMoto(id) {
    await axios.delete(`${urlServidor}/motos/${id}`)
    .then(res => {
        console.log("Moto borrada correctamente");
    })
    .catch(error=>console.log(`Error al borrar: ${error}`));
}


