import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.css']
})
export class HeroDeckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: Deck;

}
