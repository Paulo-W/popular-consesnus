import {Component, OnInit} from '@angular/core';
import {faBookOpen, faGraduationCap, faTrophy, faBook} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  faBookOpen = faBookOpen;
  faGraduationCap = faGraduationCap;
  faTrophy = faTrophy;
  faBook = faBook;

  constructor() {
  }

  ngOnInit(): void {
  }

}
