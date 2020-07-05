import {Injectable} from '@angular/core';
import {Message} from '../../interfaces/Message';
import {User} from '../../interfaces/user';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private userService: UserService) {
  }

  likeMessage(message: Message, currentUser: User): void {
    message.likeUsers = this.vote(message.likeUsers, currentUser);

    if (message.dislikeUsers?.includes(currentUser)) {
      this.userService.removeUser(message.dislikeUsers, currentUser);
    }
  }

  dislikeMessage(message: Message, currentUser: User): void {
    message.dislikeUsers = this.vote(message.dislikeUsers, currentUser);

    if (message.likeUsers?.includes(currentUser)) {
      this.userService.removeUser(message.likeUsers, currentUser);
    }
  }

  private vote(array: User[] | undefined, currentUser: User): User[] {
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
