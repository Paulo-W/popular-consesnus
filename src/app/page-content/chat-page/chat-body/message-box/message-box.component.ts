import {Component, Input, OnInit} from '@angular/core';
import {faComment, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Team} from '../../../../interfaces/Team';
import {MessageInfo} from '../../../../interfaces/MessageInfo';
import {User} from '../../../../interfaces/User';
import {Observable, of} from 'rxjs';
import {MessageServiceService} from '../../../../services/message/message-service.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.sass']
})
export class MessageBoxComponent implements OnInit {

  @Input() team: Team;
  @Input() user: User;

  messages: Observable<MessageInfo[]>;

  faPlus = faPlus;
  faMinus = faMinus;
  faComment = faComment;

  constructor(private messageService: MessageServiceService) {
  }

  ngOnInit(): void {
    this.messages = this.observeMessages();
  }

  hasImage() {
    return false;
  }

  getLikes(message: MessageInfo): number {
    const likes = message.likeUsers?.length || 0;
    const dislikes = message.dislikeUsers?.length || 0;

    return likes - dislikes;
  }

  observeMessages(): Observable<MessageInfo[]> {
    return of(this.team.messages);
  }

  likeMessage(message: MessageInfo) {
    this.messageService.likeMessage(message, this.user);
  }

  dislikeMessage(message: MessageInfo) {
    this.messageService.dislikeMessage(message, this.user);
  }

  isLiked(message: MessageInfo): boolean {
    return message.likeUsers?.includes(this.user) || false;
  }

  isDisliked(message: MessageInfo): boolean {
    return message.dislikeUsers?.includes(this.user) || false;
  }
}
