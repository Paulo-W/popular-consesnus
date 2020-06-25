import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-channels-list-page',
  templateUrl: './channels-list-page.component.html',
  styleUrls: ['./channels-list-page.component.sass']
})
export class ChannelsListPageComponent implements OnInit {

  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

  search(term: string): void {
    // this.searchTerms.next(term);
  }

}
