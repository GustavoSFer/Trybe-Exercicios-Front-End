"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const soma = this.myNumber + myParam;
        return `A soma é: ${soma}`;
    }
}
const cla = new MyClass(20);
console.log(cla.myFunc(4));
