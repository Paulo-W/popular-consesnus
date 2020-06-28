import {Component, OnInit} from '@angular/core';
import {faBook, faBookOpen, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../services/user/user.service';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  private userId: number;
  user: User;
  userChannels: Observable<string[]> = new Observable<string[]>();

  faBookOpen = faBookOpen;
  faGraduationCap = faGraduationCap;
  faBook = faBook;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(
      user => {
        this.user = user;
        this.getUserChannels();
        console.log(`Successfully retrieved user name=${user.name}`);
      }
    );
  }

  getUserChannels() {
    this.userChannels = this.userService.getUserChannels(this.user);
  }


}
