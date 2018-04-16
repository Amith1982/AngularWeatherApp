import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs/Observable';
import { Weather, Result } from '../model/weather';
import { Store, State } from '@ngrx/store';
import * as weatherActions from '../weather/store/actions/weather.actions';
import { AppState } from '../model/appState';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (onSubmit)="this.citySearch($event)"></app-search>
  <app-results [searchResult] = "result$ | async" (deleteCity)="deleteCity($event)"></app-results>
`})

// tslint:disable-next-line:component-class-suffix
export class WeatherContainer implements OnInit {
  result$: Observable<Result[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.result$ = this.store.select(state => state.cities.cityList);
  }

  citySearch(city: string) {
    this.store.dispatch(new weatherActions.CitySearchAction(city));
  }

  deleteCity(cityId: number) {
    this.store.dispatch(new weatherActions.DeleteCityAction(cityId));
  }
}

