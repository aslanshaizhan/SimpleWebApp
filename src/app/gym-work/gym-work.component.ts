import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';
import {Exercise} from '../Exercise';

@Component({
  selector: 'app-gym-work',
  templateUrl: './gym-work.component.html',
  styleUrls: ['./gym-work.component.scss']
})
export class GymWorkComponent implements OnInit {

  exerciseList: Exercise[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.exerciseList = this.userService.getExercise();
  }
}
