import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})

export class StringInterpolationComponent {
  data:number = 10;
  data2: string = "Suryanarayan Rath";

  getDataValue() {
    return this.data2;
  }
}
