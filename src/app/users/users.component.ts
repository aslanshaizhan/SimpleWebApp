import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  userList: User[] = [];

  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    this.userList = this.userService.getUsers();
  }

}
