import {Component, OnInit} from '@angular/core';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  faBookOpen = faBookOpen;

  constructor() {
  }

  ngOnInit(): void {
  }

}
