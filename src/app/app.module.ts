import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GymWorkComponent } from './gym-work/gym-work.component';
import { GymListComponent } from './gym-list/gym-list.component';
import { GymComponent } from './gym/gym.component';
import { UsersComponent } from './users/users.component';
import {UserService} from './services/user.service';
import {LoggingService} from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GymWorkComponent,
    GymListComponent,
    GymComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
