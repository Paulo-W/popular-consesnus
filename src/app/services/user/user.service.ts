import {Injectable} from '@angular/core';
import {User} from '../../interfaces/user';
import {USERS} from '../../mock/mock-user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: Observable<number>;

  constructor() {
  }

  getUserById(id: number): Observable<User> | undefined {
    return of(USERS.find(user => user.id === 1));
  }

  getCurrentUser(): Observable<number> {
    return of(1);
  }

  getUserChannels(user: User): Observable<string[]> {
    return of(user.channels);
  }

  leaveChannel(userId: number, channelName: string): void {
    this.getUserById(userId).subscribe(
      user => {
        const index = user.channels.indexOf(channelName, 0);
        if (index > -1) {
          user.channels.splice(index, 1);
        } else {
          Error('Could not remove channel from user list not a member of that Channel');
        }
      }
    );
  }

  addChannel(userId: number, channelName: string): void {
    this.getUserById(userId).subscribe(
      user => {
        if (user.channels.find(it => it === channelName)) {
          Error(`Could not add User ${user.username} to Channel ${channelName} as user is already a member`);
        } else {
          user.channels.push(channelName);
        }
      }
    );
  }
}
