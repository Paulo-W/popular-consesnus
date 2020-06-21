import {Component, OnInit} from '@angular/core';
import {faUpload} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.sass']
})
export class ChatFooterComponent implements OnInit {

  faUpload = faUpload;

  constructor() {
  }

  ngOnInit(): void {
  }

}
