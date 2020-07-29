import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {APIService} from '../../API.service';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.sass']
})
export class UserBadgeComponent implements OnInit {

  user: string;
  name: string;

  constructor(
    private userService: UserService,
    private apiService: APIService
  ) {
  }

  ngOnInit(): void {
    this.subscribeToUser();
  }

  private subscribeToUser() {
    this.userService.currentUser.subscribe(
      user => {
        this.user = user;
        if (user) {
          this.setUsername();
        }
      }
    );
  }

  private setUsername() {
    if (this.user) {
      this.apiService.GetUser(this.user).then(
        user => this.name = user.username
      );
    }
  }
}
