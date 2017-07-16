import { Component } from '@angular/core';
import { Deck } from './deck';

let environment: Deck = new Deck();
let heroDecks: Deck[] = [];
let sampleHero = new Deck();
sampleHero.addCharacter("jim",5);
heroDecks.push(sampleHero);
heroDecks.push(sampleHero);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = heroDecks;
  newHero = {};
  newDeck = new Deck();

  addHero = function(): void {
    this.newDeck.addCharacter(this.newHero.name, this.newHero.health);
    this.heroes.push(this.newDeck);
    this.newHero = {};
    this.newDeck = new Deck();
  }

  removeHero = function(index: number): void {
    this.heroes.splice(index, 1);
  }

  get diagnostic() { return JSON.stringify(this.newHero); }

  isEmpty = function(field: 'string'): boolean {
    return this.newHero[field] === undefined || this.newHero[field] === ''  || this.newHero[field] === 0;
  }

  isValid = function(): boolean {
    return typeof this.newHero.name !== undefined
      && typeof this.newHero.health !== undefined && this.newHero.health > 0
  }

  title = 'app';
}
