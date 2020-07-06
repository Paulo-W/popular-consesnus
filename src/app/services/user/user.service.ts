import {Injectable} from '@angular/core';
import {User} from '../../interfaces/User';
import {USERS} from '../../mock/mock-user';
import {Observable, of} from 'rxjs';
import {Channel} from '../../interfaces/Channel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUserById(): Observable<User> | undefined {
    return of(USERS.find(user => user.id === 1));
  }

  getCurrentUser(): User {
    return USERS.find(user => user.id === 1);
  }

  getUserChannels(user: User): Observable<string[]> {
    return of(user.channels);
  }

  leaveChannel(userId: number, channelName: Channel): void {
    this.getUserById().subscribe(
      user => {
        const index = user.channels.indexOf(channelName.name, 0);
        if (index > -1) {
          user.channels.splice(index, 1);
        } else {
          Error('Could not remove channel from user list not a member of that Channel');
        }
      }
    );
  }

  addChannel(userId: number, channelName: Channel): void {
    this.getUserById().subscribe(
      user => {
        if (user.channels.find(it => it === channelName.name)) {
          Error(`Could not add User ${user.username} to Channel ${channelName} as user is already a member`);
        } else {
          user.channels.push(channelName.name);
        }
      }
    );
  }

  removeUser(array: User[], currentUser: User) {
    const index = array.indexOf(currentUser);

    if (index > -1) {
      array.splice(index, 1);
      return array;
    }
  }

}
