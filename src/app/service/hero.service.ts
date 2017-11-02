import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero, heroes } from '../model/data-model';

@Injectable()
export class HeroService {
  // delayMs = 500;

  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero);
  }
}
