import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.scss']
})
export class GymListComponent implements OnInit {
  userList: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
  }

}
