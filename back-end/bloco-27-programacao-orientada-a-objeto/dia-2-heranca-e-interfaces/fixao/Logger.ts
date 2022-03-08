interface Logger {
  log(p: string): void;
}

interface DataBase {
  base: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(p: string): void {
      console.log(p);
  }
}

class ConsoleLogger2 implements Logger {
  log(p: string): void {
    console.log("console2", p);
  }
}

class ExampleDatabase implements DataBase {
 constructor(public base: Logger = new ConsoleLogger()) { }
  save(key: string, value: string): void {
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