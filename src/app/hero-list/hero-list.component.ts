import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';
import { Hero } from '../model/data-model';
import { HeroService } from '../service/hero.service';

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
    Observable.of(1, 2, 3).map(x => x + '!!!')
      .subscribe(x => console.log(x));
    Observable.from(['hello', 'buddy'])
      .subscribe(x => console.log(x));
    // Observable.interval(1000)
    //   .subscribe(x => console.log(x));

    let observable = Observable.create(function subsribe(observer) {
      observer.next(1);
      observer.next(2);
      // observer.error('something went really wrong...');
      setTimeout(() => {
        observer.next(3);
        observer.complete();
      }, 1000);
    });
    let myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    observable.subscribe(myObserver);
    // or
    observable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

    let button = document.querySelector('#button');
    Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .scan((count) => +count + 1, 0)
      .subscribe(count => console.log(`Click ${count} times`));

    this.getHeroes();
    this.results = this.http.get('assets/api/items.json');
    // .subscribe(data => {
    //   this.results = data['results'];
    // });
    this.http.get('assets/api/items.json').toPromise()
      .then(response => response['results'])
      .then(response => console.log(response[0]));
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
