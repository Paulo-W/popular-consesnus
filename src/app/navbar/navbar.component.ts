import {Component, OnInit} from '@angular/core';
import {faBell, faHome, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faHome = faHome;
  faSignOut = faSignOutAlt;
  faBell = faBell;
  title = 'Popular Consensus';

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  async signOut() {
    console.log('Calling sign out');
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error could not sign user out', error);
    }
  }
}
