import { Weather, City, Result } from './weather';

export interface AppState {
    cities: {
        cityList: Array<Result>;
    };
}
