import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  allowButtonEnable: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowButtonEnable = true;
    }, 5000);
  }
}
