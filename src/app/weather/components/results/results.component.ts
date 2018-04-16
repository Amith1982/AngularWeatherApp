import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Weather, Result } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  constructor() { }

   @Input() searchResult: Result[];
   @Output() deleteCity = new EventEmitter<number>();
}


