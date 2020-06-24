import {Component, OnInit} from '@angular/core';
import {faBell, faHome, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

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


  constructor() {
  }

  ngOnInit(): void {
  }
}
