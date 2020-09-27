import {Component, Input, OnInit} from '@angular/core';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../../../../services/message/message.service';
import {MessageInfo, Team} from '../../../../custom-types';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.sass']
})
export class MessageBoxComponent implements OnInit {

  @Input() team: Team;
  @Input() teamNumber: number;

  messages: MessageInfo[];

  faComment = faComment;

  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getMessages();
    this.subscribeMessage();
  }

  private subscribeMessage() {
    this.messageService.listenForNewMessages().subscribe((ev) => {
      const data = (ev as any).value.data.onCreateMessage;

      if (data.teamId.id === this.team.id) {
        this.messages.push(data);
      }
    });
  }

  private getMessages() {
    this.messageService.getMessages(this.team.id).then(
      messages => {
        this.messages = messages.sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          }
        );
      }
    );
  }
}
