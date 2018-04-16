import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter<string>();
  city = '';
  onSubmitCity() {
    if (this.city !== '') {
    this.onSubmit.emit(this.city);
    } else {
      alert('Please enter a valid city');
    }
    this.city = '';
 }
}
