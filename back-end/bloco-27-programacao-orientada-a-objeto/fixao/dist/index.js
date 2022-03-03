"use strict";
class Tv {
    // connectedTo: string;
    constructor(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    trunOn() {
        return `Marca: ${this.brand},/n Tamanha: ${this.size},/n Resolução: ${this.resolution},/n Entradas: ${this.connections}, `;
    }
}
const tv1 = new Tv('Sansung', 50, '4k', ['HDMI', 'Ethernet']);
tv1.trunOn();
