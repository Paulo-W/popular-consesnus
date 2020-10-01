import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MappedDebate} from '../../custom-types';
import {DebateService} from '../../services/debate/debate.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  searchString: string;
  filteredDebates: MappedDebate[];

  constructor(
    private route: ActivatedRoute,
    private debateService: DebateService,
    private router: Router
  ) {

    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = (): boolean => {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.getSearchString();
    this.getFilteredDebates();
  }

  private getSearchString() {
    this.searchString = this.route.snapshot.paramMap.get('string');
  }

  private getFilteredDebates() {
    this.debateService.getAllDebates().then(debates => {
      this.filteredDebates = debates.filter(debate => debate.title.toLowerCase().includes(this.searchString.toLowerCase()));
    });
  }
}
