import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherService } from '././weather/weather.service';
import { Result } from './model/weather';
let service: WeatherService;
let httpMock: any;

describe('weatherService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                WeatherService,
            ]
        });
        const testBed = getTestBed();
        service = testBed.get(WeatherService);
        httpMock = testBed.get(HttpTestingController);
    });

    it('should return an Observable<result[]>', () => inject([HttpClient, HttpTestingController, WeatherService]
        // tslint:disable-next-line:no-shadowed-variable
        , (http: HttpClient, httpMock: HttpTestingController, service: WeatherService) => {

            const result: Result[] = [
                { id: 1, city: 'London', forecast: [] },
            ];

            service.getCityWeatherForecast('London').subscribe((city) => {

                expect(city.length).toBe(1);

                expect(city).toEqual(result);

            });
            // tslint:disable-next-line:max-line-length
            const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=010721642521f31b0fbc8c3831d45951&cnt=10';

            const req = httpMock.expectOne(url);

            expect(req.request.method).toBe('GET');

            req.flush(result);

            httpMock.verify();
        }));

});



