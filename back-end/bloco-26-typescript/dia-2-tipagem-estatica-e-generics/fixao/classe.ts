enum racaDog {
  viraLata = "Vira Lata",
  Pit = "PitBull",
  Hot = "Hotwaler",
  pincher = "Pincher"
}

class Dog {
  name: string;
  raca: racaDog;
  peso: number;

  constructor(name: string, raca: racaDog, peso: number) {
    this.name = name;
    this.raca = raca;
    this.peso = peso;
  }

  latir(): void {
    console.log("au au!!");
  }

  andar(): void {
    console.log(`${this.name} esta andando`);
  }

  getName(): string {
    return this.name;
  }

  info() {
    console.log(`Nome: ${this.name} sua raça é: ${this.raca} e seu peso: ${this.peso} kg`);
  }
}

const dog1 = new Dog("Slinky", racaDog.viraLata, 26);

console.log(dog1.getName());
dog1.info();

// =========================

class Casa {
  cor: string;
  tamanho: number
  constructor(cor: string, tamanho: number) {
    this.cor = cor;
    this.tamanho = tamanho;
  }

  infor() {
    console.log(`A cor da casa é: ${this.cor} e seu tamanho ${this.tamanho} m2`);
  }
}

const casa1 = new Casa("Preto", 145);
casa1.infor();