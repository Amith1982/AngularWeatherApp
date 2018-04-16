import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Weather, Result } from '../model/weather';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { environment } from '../../environments/environment';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WeatherService {
  API_KEY = '010721642521f31b0fbc8c3831d45951';
  testDataUrl = 'assets/testData.json';

  constructor(private http: HttpClient) { }
  getCityWeatherForecast(cityName): Observable<Result[]> {
    return this.http
      .get(`${environment.weatherApiConf.url}/forecast?q=${cityName.payload}&units=metric&appid=${environment.weatherApiConf.appId}&cnt=10`)
      .pipe(
        map((r: Weather) => {
          return {
            id: r.city.id,
            city: r.city.name,
            forecast: r.list
          };
        }),
        catchError(this.handleError<any>('getCityWeatherForecast'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
