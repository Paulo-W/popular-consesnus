import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SideNavService} from '../services/side-nav/side-nav.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.sass']
})
export class SecondNavComponent implements OnInit {
  faSearch = faSearch;

  private searchTerms = new Subject<string>();

  constructor(private sideNavService: SideNavService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.heroes$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering a term
    //   debounceTime(100),
    //
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term))
    // );
  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
