class Person {
  name: string;
  birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get nome() {
    return this.name;
  }
  set nome(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter pelo menos 3 caracteres!');
    this.name = value;
  }

  set date(value: Date) {
    this.validateBirthDate(value);
    this.birthDate = value; 
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
}

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
}
}