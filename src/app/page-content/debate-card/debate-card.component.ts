import {Component, Input, OnInit} from '@angular/core';
import {DebateInfo} from '../../interfaces/Debate';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-debate-card',
  templateUrl: './debate-card.component.html',
  styleUrls: ['./debate-card.component.sass']
})
export class DebateCardComponent implements OnInit {

  @Input() debates: DebateInfo[];

  fabBookMark = faBookmark;

  constructor() {
  }

  ngOnInit(): void {
  }

}
