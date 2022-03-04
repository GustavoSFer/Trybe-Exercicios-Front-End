"use strict";
class Superclass {
    constructor(isSuper) {
        this.isSuper = true;
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log("Olá Mundo!");
    }
}
class Subclass extends Superclass {
}
const myFunc = (obj) => {
    obj.sayHello();
};
const obj1 = new Superclass(true);
const obj2 = new Subclass(false);
myFunc(obj1);
myFunc(obj2);
