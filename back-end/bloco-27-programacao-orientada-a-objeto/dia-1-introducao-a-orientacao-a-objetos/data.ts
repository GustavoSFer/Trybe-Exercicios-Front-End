class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor( dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
  }

  get data() {
    return `dia ${this._dia} mes ${this._mes} ano ${this._ano}`;
  }

  set dia (dia: number) {
    if (dia > 0){
      this._dia = dia;
    }
  }

  set mes (mes: number) {
    if (mes > 0 && mes < 30) this._mes = mes;
  }

  set ano (ano: number) {
    if (ano > 1930 && ano < 2022) this._ano = ano;
  }
}

const data = new Data(3, 4, 2022);
console.log(data);
console.log(data.data)