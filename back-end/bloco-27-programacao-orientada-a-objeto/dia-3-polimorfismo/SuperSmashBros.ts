abstract class Character {
  abstract talk(): void;

  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private name: string, private specialMoveName: string) {
    super();
  }
  talk(): void {
   console.log(`Olá, eu sou ${this.name}, eu ataco de perto.`);   
  }
  specialMove(): void {
    console.log(`Movimento especial ${this.specialMoveName}`);
  }
}

class LongRangerCharacter extends Character {
  constructor(private name: string, private specialMoveName: string) {
    super();
  }
  talk(): void {
   console.log(`Olá, eu sou ${this.name}, eu ataco de perto.`);   
  }
  specialMove(): void {
    console.log(`Movimento especial ${this.specialMoveName}`);
  }
}

function myFunc(character: Character) {
  character.talk()
  character.specialMove();
}