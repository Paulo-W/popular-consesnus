import {Component, OnInit} from '@angular/core';
import {faBookmark, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {DebateService} from '../../services/debate/debate.service';
import {DebateInfo} from '../../interfaces/Debate';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-debate-cards',
  templateUrl: './debate-cards.component.html',
  styleUrls: ['./debate-cards.component.sass']
})
export class DebateCardsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  fabBookMark = faBookmark;

  debates: DebateInfo[];

  constructor(private debateService: DebateService) {
  }

  ngOnInit(): void {
    this.getDebates();
  }

  getDebates() {
    this.debates = this.debateService.getUserDebates();
  }
}
