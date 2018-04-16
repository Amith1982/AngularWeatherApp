import { Weather, Result } from './../../../model/weather';
import * as weatherActions from './../actions/weather.actions';
import { AppState } from '../../../model/appState';

export interface State {
 //   searchResult: Weather;
    cityList: Result[];
    // loading: boolean;
    // searchTerms: string;

}

const initialState: State = {
    cityList: [],
};

export function weathersReducer(state = initialState, action: weatherActions.Actions): State {
    switch (action.type) {
        case weatherActions.CITY_SEARCH: {
          return {
            ...state,
            // loading: true,
            // searchTerms: action.payload
        };
        }
        case weatherActions.CITY_SEARCH_SUCCESS: {
        return {
            ...state,
         //   loading: false,
            cityList: [...state.cityList, action.payload]
        };
        }
        case weatherActions.CITY_SEARCH_FAIL: {
            return {
                ...state,
            };
            }
        case weatherActions.DELETE_CITIES: {
                return {
                    ...state,
                    cityList: state.cityList.filter(city =>
                        city.id !== action.payload)
                };
            }
        default: {
            return state;
        }
    }
}
