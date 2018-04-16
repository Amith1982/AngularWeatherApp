import { weathersReducer, State } from './weather.reducers';
import * as fromWeather from './weather.reducers';
import * as weatherActions from './../actions/weather.actions';
import { Result } from '../../../model/weather';

describe(`weatherReducer`, () => {

    describe(`deleteCityAction`, () => {

        it(`should delete a City`, () => {
            const currentState = {
                 cityList: [
                   { id: 123456, city: 'London', forecast: []},
                   { id: 223333, city: 'Paris' , forecast: []},
                 ]
            };
            const expectedResult = {
               cityList: [{ id: 223333, city: 'Paris' , forecast: []}],
            };

            const action = new weatherActions.DeleteCityAction(123456);
            const result = weathersReducer(currentState, action);
            expect(result).toEqual(expectedResult);
        });

    });

    describe(`searchCityActionSuccess`, () => {

        it(`should return the new City List`, () => {
            const currentState = {
                 cityList: [
                   { id: 123456, city: 'London', forecast: []},
                 ]
            };
            const expectedResult = {
               cityList: [{ id: 123456, city: 'London', forecast: []},
               { id: 123456, city: 'London', forecast: []},
            ],
            };

            const action = new weatherActions.CitySearchSuccessAction(currentState.cityList);
            const result = weathersReducer(currentState, action);
            expect(result.cityList.length).toEqual(2);
        });

    });

    describe('undefined action', () => {
        it('should return the default state', () => {
          const action = {} as any;
          const result = weathersReducer(undefined, action);
          expect(result).toEqual({ cityList: [  ] });
        });
      });
});
