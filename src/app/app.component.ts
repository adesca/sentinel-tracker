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

  title = 'app';
}
