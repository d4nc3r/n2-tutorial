import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details</h2>
        <div>
          <label>id: </label>
          {{selectedHero.id}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
      </div>
    `,
    styles: [`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `]
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

var HEROES: Hero[] = [
  {id: 11, name: 'Black widow'},
  {id: 12, name: 'The Hulk'},
  {id: 13, name: 'Captain America'},
  {id: 14, name: 'Iron Man'},
  {id: 15, name: 'Thor'},
  {id: 16, name: 'Nick Fury'},
  {id: 17, name: 'Hawkeye'},
  {id: 18, name: 'Falcon'},
  {id: 19, name: 'Maria Hill'},
  {id: 20, name: 'Vision'},
]
