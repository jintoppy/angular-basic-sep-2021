import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';

  name = 'MEAN'

  isDisabled = true;

  fruits = ['Apple', 'Banana', 'Jackfruit']

  users = [
    { name: 'User1', age: 10},
    { name: 'User2', age: 20},
    { name: 'User3', age: 30}
  ]

  onBtnClick(){
    this.isDisabled = !this.isDisabled;
  }
}
