import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import * as weatherActions from '../actions/weather.actions';
import { WeatherService } from '../../weather.service';


@Injectable()

export class WeatherEffects {

@Effect()
searchCity$: Observable<Action> = this.actions$
.ofType(weatherActions.CITY_SEARCH)
.switchMap(query => {
    return this.weatherService.getCityWeatherForecast(query)
    .map(results => new weatherActions.CitySearchSuccessAction(results));
 //   .catch(() => of(new weatherActions.CitySearchFailAction(payload));
});


constructor(private actions$: Actions, private weatherService: WeatherService) {}


}
