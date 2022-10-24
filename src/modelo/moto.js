export default class Moto {
    constructor(id, marca, cilindrada, color) {
        this.id = id ? id : -1;
        this.marca = marca;
        this.cilindros = cilindrada;
        this.color = color;
    }
}