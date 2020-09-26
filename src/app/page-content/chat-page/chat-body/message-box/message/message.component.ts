import {Component, Input, OnInit} from '@angular/core';
import {MessageInfo} from '../../../../../custom-types';
import {Storage} from 'aws-amplify';
import {UserService} from '../../../../../services/user/user.service';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../../../../../services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() message: MessageInfo;
  image = false;
  imageUrl = null;
  profileImageUrl = null;

  faPlus = faPlus;
  faMinus = faMinus;

  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.checkForImage();
    this.getUserProfilePic();
  }

  private checkForImage() {
    if (this.message.image) {
      this.image = true;
      this.getImage();
    }
  }

  private getImage() {
    Storage.get(this.message.image).then(img => {
        this.imageUrl = img;
        if (!this.message.content) {
          this.message.content = ' ';
        }
      }
    );
  }

  getLikes(message: MessageInfo): number {
    const likes = message.likeUsers?.length || 0;
    const dislikes = message.dislikeUsers?.length || 0;

    return likes - dislikes;
  }

  likeMessage(message: MessageInfo) {
    this.messageService.likeMessage(message).then(
      updatedMessage => message = updatedMessage
    );
  }

  dislikeMessage(message: MessageInfo) {
    this.messageService.dislikeMessage(message).then(
      updatedMessage => message = updatedMessage
    );
  }

  isLiked(message: MessageInfo): boolean {
    return message.likeUsers?.includes(this.userService.currentUser.value);
  }

  isDisliked(message: MessageInfo): boolean {
    return message.dislikeUsers?.includes(this.userService.currentUser.value);
  }

  private getUserProfilePic() {
    this.userService.getProfilePic(this.message.createdBy.id).then(result => this.profileImageUrl = result);
  }
}
