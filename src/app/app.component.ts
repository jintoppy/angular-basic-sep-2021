import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputVal = '';
  selectedUser?:User;

  constructor(private appService: AppService){
    console.log('within constructor');
  }

  ngOnInit(){
    console.log('within ngOnInit');
    this.users = this.appService.getUsers();
    this.filteredUsers = [...this.users];
  }

  users: User[] = []
  filteredUsers: User[] = []

  dummyUsers: User[] = [
    { name: 'Dummy1', age: 10},
    { name: 'Dummy2', age: 20},
    { name: 'Dummy3', age: 30}
  ]

  onUserSelect(user:User){
    this.selectedUser = user;
    
  }

  onDummySelect(evntValue:User){
    console.warn('dummy select called', evntValue);
  }  

  searchTxt = '';

  search(){
    this.filteredUsers = this.users.filter(u => {
      return u.name.includes(this.inputVal);
    });
  }

  
}
