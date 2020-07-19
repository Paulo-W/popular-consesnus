import {Injectable} from '@angular/core';
import {MessageInfo} from '../../interfaces/MessageInfo';
import {CustomUser} from '../../interfaces/CustomUser';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private userService: UserService) {
  }

  likeMessage(message: MessageInfo, currentUser: CustomUser): void {
    message.likeUsers = this.vote(message.likeUsers, currentUser);

    if (message.dislikeUsers?.includes(currentUser)) {
      this.userService.removeUser(message.dislikeUsers, currentUser);
    }
  }

  dislikeMessage(message: MessageInfo, currentUser: CustomUser): void {
    message.dislikeUsers = this.vote(message.dislikeUsers, currentUser);

    if (message.likeUsers?.includes(currentUser)) {
      this.userService.removeUser(message.likeUsers, currentUser);
    }
  }

  private vote(array: CustomUser[] | undefined, currentUser: CustomUser): CustomUser[] {
    if (array === undefined) {
      array = [];

      array.push(currentUser);
      return array;
    }

    if (array.includes(currentUser)) {
      this.userService.removeUser(array, currentUser);
    } else {
      array.push(currentUser);
    }

    return array;
  }
}
