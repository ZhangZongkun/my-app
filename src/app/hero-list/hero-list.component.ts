import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
