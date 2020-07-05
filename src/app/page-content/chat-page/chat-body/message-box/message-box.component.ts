import {Component, Input, OnInit} from '@angular/core';
import {faComment, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Team} from '../../../../interfaces/Team';
import {Message} from '../../../../interfaces/Message';
import {User} from '../../../../interfaces/user';
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

  messages: Observable<Message[]>;

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

  getLikes(message: Message): number {
    const likes = message.likeUsers?.length || 0;
    const dislikes = message.dislikeUsers?.length || 0;

    return likes - dislikes;
  }

  observeMessages(): Observable<Message[]> {
    return of(this.team.messages);
  }

  likeMessage(message: Message) {
    this.messageService.likeMessage(message, this.user);
  }

  dislikeMessage(message: Message) {
    this.messageService.dislikeMessage(message, this.user);
  }

  isLiked(message: Message): boolean {
    return message.likeUsers?.includes(this.user) || false;
  }

  isDisliked(message: Message): boolean {
    return message.dislikeUsers?.includes(this.user) || false;
  }
}
