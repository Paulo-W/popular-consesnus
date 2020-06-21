import {Component, OnInit} from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.sass']
})
export class ChatBodyComponent implements OnInit {

  faPencil = faPencilAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
