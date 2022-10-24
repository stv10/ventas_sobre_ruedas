import axios from "axios";
import { urlServidor } from "../constantes";

export async function getAutos() {
    let datos_autos = [];
    try {
        let response = await axios.get("http://localhost:3000/autos");
        datos_autos = response.data;
    } catch (e) {
        alert(e);
    }
    return datos_autos;
}

//TAREA PARA EL HOGAR
// - modificar la parte de bicicletas para que trabaje con el json-server (sin el servicio)
// - completar el codigo del servicio de autos para que todas las llamadas al servidor esten en el servicio

export async function getAuto(id) {
    return await axios.get(`${urlServidor}/autos/${id}`)
}

export async function grabarAuto(auto) {
    if (auto.id >= 0)
            await axios.put(`http://localhost:3000/autos/${auto.id}`, auto)
                .catch(error => console.log(`Error al editar: ${error}`));
        else
            await axios.post(`http://localhost:3000/autos`, {...auto, id: null})
                .catch(error => console.log(`Error al agregar: ${error}`));
}

export async function borrarAuto(id) {
    await axios.delete(`${urlServidor}/autos/${id}`)
            .then(response => {
                console.log("Auto borrado correctamente");
            })
            .catch(error=>console.log(`Error al borrar: ${error}`));
}