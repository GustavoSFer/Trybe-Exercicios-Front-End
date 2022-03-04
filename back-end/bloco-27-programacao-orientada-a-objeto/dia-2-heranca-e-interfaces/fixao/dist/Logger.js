"use strict";
class ConsoleLogger {
    log(p) {
        console.log(p);
    }
}
class ConsoleLogger2 {
    log(p) {
        console.log("console2", p);
    }
}
class ExampleDatabase {
    constructor(base = new ConsoleLogger()) {
        this.base = base;
    }
    save(key, value) {
        this.base.log(`Salvando o valor ${value} na chave ${key}`);
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const exampleData = new ExampleDatabase(logger1);
const exampleData2 = new ExampleDatabase(logger2);
const exampleData3 = new ExampleDatabase();
exampleData.save('chave 1', '34');
exampleData2.save('2', '2123');
