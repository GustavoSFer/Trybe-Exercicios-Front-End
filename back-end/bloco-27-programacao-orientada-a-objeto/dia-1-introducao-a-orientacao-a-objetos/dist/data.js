"use strict";
class Data {
    constructor(dia, mes, ano) {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }
    get data() {
        return `dia ${this._dia} mes ${this._mes} ano ${this._ano}`;
    }
    set dia(dia) {
        if (dia > 0) {
            this._dia = dia;
        }
    }
    set mes(mes) {
        if (mes > 0 && mes < 30)
            this._mes = mes;
    }
    set ano(ano) {
        if (ano > 1930 && ano < 2022)
            this._ano = ano;
    }
}
const data = new Data(3, 4, 2022);
console.log(data);
console.log(data.data);
