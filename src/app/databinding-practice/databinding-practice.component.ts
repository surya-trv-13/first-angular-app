import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css'],
})
export class DatabindingPracticeComponent {
  updatedUserName: string = '';

  udpateUserField() {
    this.updatedUserName = '';
  }
}
