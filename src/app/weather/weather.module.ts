import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { weathersReducer } from './store/reducers/weather.reducers';
import { WeatherEffects } from './store/effects/weather.effects';
// import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({cities: weathersReducer}),
    EffectsModule.forRoot([WeatherEffects]),
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer,

  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
