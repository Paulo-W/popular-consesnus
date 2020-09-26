import {Component, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {DebateService} from '../../services/debate/debate.service';
import {MappedDebate} from '../../custom-types';
import {Router} from '@angular/router';


@Component({
  selector: 'app-debate-cards',
  templateUrl: './debate-cards.component.html',
  styleUrls: ['./debate-cards.component.sass']
})
export class DebateCardsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  debates: MappedDebate[];

  constructor(
    private debateService: DebateService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = (): boolean => {
      return false;
    };
  }

  ngOnInit(): void {
    this.getDebates();
  }

  getDebates() {
    this.debateService.getDebates().then(debates => {
      this.debates = debates.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    });
  }
}
