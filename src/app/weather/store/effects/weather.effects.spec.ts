import {hot} from 'jasmine-marbles';
import {WeatherEffects} from './Weather.effects';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {toArray} from 'rxjs/operator/toArray';
import {toPromise} from 'rxjs/operator/toPromise';
import {Observable} from 'rxjs/Observable';

// TODO: https://github.com/ReactiveX/rxjs/issues/701
describe('Weather effects commented out due to https://github.com/ReactiveX/rxjs/issues/701 ', () => {
//   it('Weather effects retrun a CITY-SEARCH_SUCCESS', () => {
//     const actions = new Actions(hot('-a-|', {a: {type: 'CITY_SEARCH'}}));
//     const service = mockService('expected');
//     const effects = new WeatherEffects(actions, service);
//     const expected = hot('a', { a: { type: 'CITY_SEARCH_SUCCESS', payload: 'expected' } });
//     expect(effects.searchCity$).toBeObservable(expected);
// });

  function mockService(response: any): any {
    const service = jasmine.createSpyObj('weatherService', ['getCityWeatherForecast']);
    service.getCityWeatherForecast.and.returnValue(of(response));
    return service;
  }
});

// extract into utils file
export function readAll<T>(o: Observable<T>): Promise<T[]> {
  return toPromise.call(toArray.call(o));
}
