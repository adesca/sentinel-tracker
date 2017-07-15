//A deck is a set of cards
export class Deck {
  //A character is any entity that can receive a status effect
  private characters: Character[] = [];


  public addCharacter(name: string, health: number) {
    this.characters.push(new Character(name, health));
  }

  public getCharacter() {
    return this.characters[0];
  }

}

class Character {
   private health: number;
   private name: string;
   public statuses: Status[];

   constructor(name: string, health: number) {
     this.name = name;
     this.health = health;
   }

   public getHealth = function(): number {
     return this.health;
   }

   public getName = function(): string {
     return this.name;
   }
}

class Status {
  public name: string;
}
