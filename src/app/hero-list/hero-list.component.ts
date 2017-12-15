import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Hero } from '../model/data-model';
import { HeroService } from '../service/hero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;
  results: Observable<any>;

  constructor(private http: HttpClient,
              private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
    this.results = this.http.get('assets/api/items.json')
    // .subscribe(data => {
    //   this.results = data['results'];
    // });
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}
