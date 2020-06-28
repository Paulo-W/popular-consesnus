import {Component, OnInit} from '@angular/core';
import {faBell, faHome, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

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


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
