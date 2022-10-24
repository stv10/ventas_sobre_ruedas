export default class Auto {
    constructor(id, marca, modelo, anio) {
        this.id = id ? id : -1;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}