interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }
  myFunc(myParam: number): string {
      const soma = this.myNumber + myParam;
      return `A soma é: ${soma}`;
  }
}

const cla = new MyClass(20);
console.log(cla.myFunc(4))