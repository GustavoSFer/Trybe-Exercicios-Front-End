type passaro = {
  cor: string,
  bico: string,
  peso: number,
}

function printPassaro(pa: passaro) {
  console.log("A cor da passaro é: " + pa.cor);
  console.log("O bico é: " + pa.bico);
  console.log("O passaro pesa: " + pa.peso + " gramas");
}

printPassaro({ cor: "azul", bico: "grande", peso: 20});

// ============

type num = {
  x: number,
  y: number,
}

function soma(s: num) {
  return s.x + s.y;
}

console.log(soma({ x: 2, y: 10 }));