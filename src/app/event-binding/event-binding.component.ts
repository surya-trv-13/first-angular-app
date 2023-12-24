import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  updatedValue: string = '';

  updateValue(event: Event) {
    this.updatedValue = (<HTMLInputElement>event.target).value;
  }
}
