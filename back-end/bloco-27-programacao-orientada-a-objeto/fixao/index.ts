class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  // connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  trunOn() {
    return `Marca: ${this.brand}, Tamanha: ${this.size}, Resolução: ${this.resolution}, Entradas: ${this.connections}, `;
  }
}

const tv1 = new Tv('Sansung', 50, '4k', ['HDMI', 'Ethernet']);
tv1.trunOn();

// 4 - indexOf; console.log; push; toLowerCase....

