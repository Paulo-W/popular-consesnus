import {Component, OnInit} from '@angular/core';
import {faComment, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.sass']
})
export class MessageBoxComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  faComment = faComment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
