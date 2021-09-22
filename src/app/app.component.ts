import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputVal = '';
  selectedUser?:User;

  constructor(){
    console.log('within constructor');
  }

  ngOnInit(){
    console.log('within ngOnInit');
  }

  users: User[] = [
    { name: 'Arjun', age: 10},
    { name: 'Jeffrey', age: 20},
    { name: 'Lakshmi', age: 30}
  ]

  filteredUsers = [...this.users]

  selectUser(user: User){
    this.selectedUser = user;
  }

  searchTxt = '';

  search(){
    this.filteredUsers = this.users.filter(u => {
      return u.name.includes(this.inputVal);
    });
  }

  
}
