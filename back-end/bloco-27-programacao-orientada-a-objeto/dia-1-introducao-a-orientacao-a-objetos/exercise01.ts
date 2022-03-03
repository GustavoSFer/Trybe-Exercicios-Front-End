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
}