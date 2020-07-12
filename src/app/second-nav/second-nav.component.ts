import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SideNavService} from '../services/side-nav/side-nav.service';
import {Subject} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.sass']
})
export class SecondNavComponent implements OnInit {
  faSearch = faSearch;

  private searchTerms = new Subject<string>();

  constructor(
    private sideNavService: SideNavService,
    private location: Location
  ) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.location.back();
  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
