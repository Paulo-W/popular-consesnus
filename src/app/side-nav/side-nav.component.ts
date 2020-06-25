import {Component, OnInit} from '@angular/core';
import {faBook, faBookOpen, faGraduationCap, faPlusCircle, faTrophy} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../services/user/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  // private searchTerms = new Subject<string>();

  private userId: number;
  user: User;

  isShow = true;

  faBookOpen = faBookOpen;
  faGraduationCap = faGraduationCap;
  faTrophy = faTrophy;
  faBook = faBook;
  faPlusCircle = faPlusCircle;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(
      user => {
        this.user = user;
        console.log(`Successfully retrieved user name=${user.name}`);
      }
    );
  }

  search(term: string): void {
    // this.searchTerms.next(term);
  }
}
