import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherEffects } from './weather/store/effects/weather.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WeatherService } from './weather/weather.service';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [HttpClient, WeatherService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
