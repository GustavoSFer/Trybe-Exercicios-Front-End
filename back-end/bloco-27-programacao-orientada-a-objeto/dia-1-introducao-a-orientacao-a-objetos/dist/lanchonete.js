"use strict";
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
}
class Item {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class Pedido {
    constructor(cliente, item, pagamento, porcentual) {
        this.cliente = cliente;
        this.item = item;
        this.pagamento = pagamento;
        this.porcentual = porcentual;
    }
    totalPedido() {
        const total = this.item.reduce((prev, item) => prev + item.preco, 0);
        return total;
    }
}
const cliente1 = new Cliente("Gustavo");
const item1 = new Item("Batata Frita", 25);
const item2 = new Item("Batata Frita", 25);
const pedido1 = new Pedido(cliente1, [item1, item2], "Debito", 0.1);
console.log(pedido1.totalPedido());
