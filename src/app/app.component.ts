import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser?:User;

  users: User[] = [
    { name: 'Arjun', age: 10},
    { name: 'Jeffrey', age: 20},
    { name: 'Lakshmi', age: 30}
  ]

  selectUser(user: User){
    this.selectedUser = user;
  }

  searchTxt = '';

  search(val: string){
    this.searchTxt = val;
  }

  
}
