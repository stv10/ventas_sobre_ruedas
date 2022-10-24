export default class Bici {
    constructor(id, marca, rodado, anio) {
        this.id = id ? id : -1;
        this.marca = marca;
        this.rodado = rodado;
        this.anio = anio;
    }
}