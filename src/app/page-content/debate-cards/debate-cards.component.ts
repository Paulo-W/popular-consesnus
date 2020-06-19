import {Component, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-debate-cards',
  templateUrl: './debate-cards.component.html',
  styleUrls: ['./debate-cards.component.sass']
})
export class DebateCardsComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  fabBookMark = faBookmark;

  constructor() {
  }

  ngOnInit(): void {
  }

}
