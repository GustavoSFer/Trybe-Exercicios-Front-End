"use strict";
class Tv {
    constructor(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    trunOn() {
        return `Marca: ${this.brand}, Tamanha: ${this.size}, Resolução: ${this.resolution}, Entradas: ${this.connections}, `;
    }
    get ConnectedTo() {
        return this.connectedTo;
    }
    set ConnectedTo(connect) {
        if (this.connections.includes(connect)) {
            this.connectedTo = connect;
        }
        else {
            console.log('Sorry, connection unavailabel');
        }
    }
}
const tv1 = new Tv('Sansung', 50, '4k', ['HDMI', 'Ethernet']);
tv1.trunOn();
// 4 - indexOf; console.log; push; toLowerCase....
tv1.ConnectedTo = 'Wi-fi';
console.log('Connection:', tv1.ConnectedTo);
