import { urlServidor } from "../constantes";
import axios from "axios";

export async function getBicis() {
    let datos_bicis = [];
    try {
        let response = await axios.get("http://localhost:3000/bicis");
        datos_bicis = response.data;
    } catch (e) {
        alert(e);
    }
    return datos_bicis;
}

export async function getBici(id) {
    let bici = {};
    try {
        let res = await axios.get(`${urlServidor}/bicis/${id}`)
        bici = res.data;
    } catch (e) {
        console.log("No se pudo encontrar la bici" + e);
    }
    return bici;
}

export async function grabarBici(bici) {
    if (bici.id >= 0)
            await axios.put(`${urlServidor}/bicis/${bici.id}`, bici)
                .catch(error => console.log(`Error al editar: ${error}`));
        else
            await axios.post(`${urlServidor}/bicis`, {...bici, id: null})
                .catch(error => console.log(`Error al agregar: ${error}`));
}

export async function borrarBici(id) {
    await axios.delete(`${urlServidor}/bicis/${id}`)
            .then(response => {
                console.log("Bici borrada correctamente");
            })
            .catch(error=>console.log(`Error al borrar: ${error}`));
}