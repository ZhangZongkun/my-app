import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroService } from './service/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent, HeroListComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
