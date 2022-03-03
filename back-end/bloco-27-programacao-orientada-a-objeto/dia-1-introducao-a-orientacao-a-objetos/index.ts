class Students {
  matricula: number;
  nome: string;
  prova: number[];
  trabalho: number[];

  constructor (matricula: number, nome: string, prova: number[], trabalho: number[]) {
    this.matricula = matricula;
    this.nome = nome;
    this.prova = prova;
    this.trabalho = trabalho;
  }

  somaNota() {
    const somaProva = this.prova.reduce((prev, nota) => prev + nota, 0);
    const somaTrabalho = this.trabalho.reduce((prev, nota) => prev + nota, 0);
    return somaProva + somaTrabalho;
  }
}

const aluno1 = new Students(1, "Gustavo", [3,5,7,1], [3,6]);
console.log(aluno1.somaNota());
