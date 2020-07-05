import {Injectable} from '@angular/core';
import {Message} from '../../interfaces/Message';
import {User} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() {
  }

  likeMessage(message: Message, currentUser: User): void {
    message.likeUsers = this.vote(message.likeUsers, currentUser);

    if (message.dislikeUsers?.includes(currentUser)) {
      this.removeUser(message.dislikeUsers, currentUser);
    }
  }

  dislikeMessage(message: Message, currentUser: User): void {
    message.dislikeUsers = this.vote(message.dislikeUsers, currentUser);

    if (message.likeUsers?.includes(currentUser)) {
      this.removeUser(message.likeUsers, currentUser);
    }
  }

  private vote(array: User[] | undefined, currentUser: User): User[] {
    if (array === undefined) {
      array = [];

      array.push(currentUser);
      return array;
    }

    if (array.includes(currentUser)) {
      this.removeUser(array, currentUser);
    } else {
      array.push(currentUser);
    }

    return array;
  }

  private removeUser(array: User[], currentUser: User) {
    const index = array.indexOf(currentUser);

    if (index > -1) {
      array.splice(index, 1);
      return array;
    }
  }

}
