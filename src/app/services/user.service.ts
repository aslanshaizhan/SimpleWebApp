import {User} from '../user';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Exercise} from '../Exercise';

@Injectable()
export class UserService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    let userList: User[];
    userList = [
      new User(1, 'Askar', 25, 85),
      new User(2, 'Aslan', 50, 45),
      new User(3, 'Madiyar', 40, 100),
      new User(4, 'Sherkhan', 18, 75),
      new User(5, 'Ansar', 26, 115)
    ];

    this.loggingService.log('List of users: ' + userList);

    return userList;
  }

  // tslint:disable-next-line:typedef
  getExercise() {
    let exerciseList: Exercise[];
    exerciseList = [
      new Exercise(1, 'Run', 25),
      new Exercise(2, 'Jumping', 50),
      new Exercise(3, 'Lifting', 40),
      new Exercise(4, 'Power Lifting', 18)
    ];

    this.loggingService.log('List of users: ' + exerciseList);

    return exerciseList;
  }
}
