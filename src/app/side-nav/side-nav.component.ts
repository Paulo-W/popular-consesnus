import {Component, OnInit} from '@angular/core';
import {faBook, faBookOpen, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../services/user/user.service';
import {User} from '../interfaces/User';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  user: User;
  userChannels: Observable<string[]>;

  faBookOpen = faBookOpen;
  faGraduationCap = faGraduationCap;
  faBook = faBook;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById().subscribe(
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

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
