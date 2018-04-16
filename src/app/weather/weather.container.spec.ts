import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherContainer } from './weather.container';
import { ResultsComponent } from './components/results/results.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import {ActionsSubject, ReducerManager, ReducerManagerDispatcher} from '@ngrx/store';
import {Store, StateObservable} from '@ngrx/store';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { Result } from '../model/weather';

xdescribe('WeatherContainer', () => {
    let component: WeatherContainer;
    let fixture: ComponentFixture<WeatherContainer>;
    let weatherService: WeatherService;
    let de: DebugElement;
    // const fakeState = {

    // } as StateObservable;
    const fakeCities = { id: 1232, city: 'London', forecast: [] } as Result;

    beforeEach(async(() => {

        const cityServiceStub = {
            getCityForecast: () => Observable.of([fakeCities, fakeCities])
        };

        TestBed.configureTestingModule({
            declarations: [WeatherContainer, ResultsComponent],
            providers: [WeatherService,
                        Store,
                        {provide: StateObservable, useValue: StateObservable}],
            imports: [RouterTestingModule, HttpModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherContainer);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        weatherService = fixture.debugElement.injector.get(WeatherService);
    });

    it('should create', () => {
        const spy = spyOn(weatherService, 'getCityWeatherForecast').and.returnValue(Observable.of(fakeCities));
        expect(component).toBeTruthy();
    });

});

