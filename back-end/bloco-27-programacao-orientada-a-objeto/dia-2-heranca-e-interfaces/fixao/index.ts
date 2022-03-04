class Superclass {
  public isSuper = true;

  constructor(isSuper: boolean) {
    this.isSuper = isSuper;
  }

  public sayHello() {
    console.log("Olá Mundo!")
  }
}

class Subclass extends Superclass { }

const myFunc = (obj: Superclass) => {
  obj.sayHello();
}

const obj1 = new Superclass(true);
const obj2 = new Subclass(false);
myFunc(obj1);
myFunc(obj2);