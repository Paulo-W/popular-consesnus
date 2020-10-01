import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SideNavService} from '../services/side-nav/side-nav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.sass']
})
export class SecondNavComponent implements OnInit {
  faSearch = faSearch;


  constructor(
    private sideNavService: SideNavService,
    private router: Router
  ) {
  }

  search(value: string): void {
    console.log('hello world');
    if (value && value.trim()) {
      this.router.navigate([`/search/${value}`]);
    }
  }

  ngOnInit(): void {
  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
