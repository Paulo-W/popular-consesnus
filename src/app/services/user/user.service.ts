import {Injectable} from '@angular/core';
import {CustomUser} from '../../interfaces/CustomUser';
import {USERS} from '../../mock/mock-user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Channel} from '../../interfaces/Channel';
import {Auth} from 'aws-amplify';
import {CustomApiService, CustomGetUserChannelQuery} from '../../custom-api.service';
import {APIService} from '../../API.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<string>(null);

  constructor(
    private customApiService: CustomApiService,
    private apiService: APIService
  ) {
  }

  getUserById(): Observable<CustomUser> | undefined {
    return of(USERS.find(user => user.id === 1));
  }

  getCurrentUser(): CustomUser {
    return USERS.find(user => user.id === 1);
  }

  async getUserChannels(): Promise<CustomGetUserChannelQuery> {
    return this.customApiService.GetUserChannels(this.currentUser.value);
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
      });
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

  removeUser(array: CustomUser[], currentUser: CustomUser) {
    const index = array.indexOf(currentUser);

    if (index > -1) {
      array.splice(index, 1);
      return array;
    }
  }

  private async saveNewUser(newUser: string) {
    await this.apiService.CreateUser({
      username: newUser
    }).then(
      user => {
        this.setUserToken(this.currentUser.value);
      }
    );
  }

  async setCurrentUser() {
    Auth.currentAuthenticatedUser().then(
      user => {
        // console.log(user.username);
        this.apiService.UserByName(user.username)
          .then(it => {
            if (it.items.length > 0) {
              console.log('found a full array' + JSON.stringify(it.items[0]));
              this.setUserToken(it.items[0].id);
            } else {
              console.log('no user found must go and create one');
              this.saveNewUser(user.username);
            }
          })
          .catch(
            (error) => {
              console.log(`Exception in saving new user promise: ${error}`);
            });
      }
    );
  }

  private setUserToken(userId: string) {
    console.log('Creating new user token');
    this.currentUser.next(userId);
    localStorage.setItem('userId', userId);
  }

  removeUserToken() {
    console.log('Removing token');
    localStorage.removeItem('userId');
    this.currentUser.next(null);
  }
}
