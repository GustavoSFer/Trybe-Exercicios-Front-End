class Superclass {
  public isSuper = true;

  constructor(isSuper: boolean) {
    this.isSuper = isSuper;
  }

  protected sayHello() {
    console.log("Olá Mundo!")
  }
}

class Subclass extends Superclass {
  sayHello2() {
    this.sayHello();
  }
}

// const myFunc = (obj: Superclass) => {
//   obj.sayHello();
// }

const myFunc = (obj: Subclass) => {
  obj.sayHello();
}


const obj1 = new Superclass(true);
const obj2 = new Subclass(false);
myFunc(obj1);
myFunc(obj2);