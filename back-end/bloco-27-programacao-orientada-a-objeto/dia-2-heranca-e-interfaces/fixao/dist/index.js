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
    constructor(isSuper) {
        super(isSuper);
        this.isSuper = false;
    }
}
// const myFunc = (obj: Superclass) => {
//   obj.sayHello();
// }
const myFunc = (obj) => {
    obj.sayHello();
    if (obj.isSuper) {
        console.log('Super');
    }
    else {
        console.log("Sub!");
    }
};
const obj1 = new Superclass(true);
const obj2 = new Subclass(false);
myFunc(obj1);
myFunc(obj2);
