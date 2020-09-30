import {Injectable} from '@angular/core';
import {CustomUser} from '../../interfaces/CustomUser';
import {USERS} from '../../mock/mock-user';
import {BehaviorSubject} from 'rxjs';
import {Auth, Storage} from 'aws-amplify';
import {APIService, OnUpdateUserSubscription, UpdateUserMutation} from '../../API.service';
import {CustomApiService} from '../../custom-api.service';
import {CustomGetUserChannelQuery} from '../../custom-types';
import {UUID} from 'angular2-uuid';
import {Observable} from 'zen-observable-ts';


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

  listenForUpdatingUser(): Observable<OnUpdateUserSubscription> {
    return this.apiService.OnUpdateUserListener;
  }

  getCurrentUser(): CustomUser {
    return USERS.find(user => user.id === 1);
  }

  async getUserChannels(): Promise<CustomGetUserChannelQuery> {
    return this.customApiService.GetUserChannels(this.currentUser.value);
  }

  async setCurrentUser() {
    Auth.currentAuthenticatedUser().then(
      user => {
        // console.log(user.username);
        this.apiService.UserByName(user.username)
          .then(it => {
            if (it.items.length > 0) {
              // console.log('found a full array' + JSON.stringify(it.items[0]));
              this.setUserToken(it.items[0].id);
            } else {
              // console.log('no user found must go and create one');
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

  private async saveNewUser(newUser: string) {
    await this.apiService.CreateUser({
      profile_image: 'user.png',
      username: newUser
    }).then(
      user => {
        this.setUserToken(user.id);
      }
    );
  }

  private setUserToken(userId: string) {
    console.log(` Reached setting the user ${userId}`);
    this.currentUser.next(userId);
    localStorage.setItem('userId', userId);
  }

  removeUserToken() {
    localStorage.removeItem('userId');
    this.currentUser.next(null);
  }

  getProfilePic(id: string) {
    return this.apiService.GetUser(id).then(user => Storage.get(user.profile_image));
  }

  getUsername(): Promise<string> {
    return this.apiService.GetUser(this.currentUser.value).then(user => user.username);
  }

  async updateUser(username: string, file: File, fileType: string): Promise<UpdateUserMutation> {
    if (file) {
      return Storage.put(`${UUID.UUID()}.${fileType}`, file, {contentType: 'image/*'}).then(
        key => this.saveUserWithImage(username, key));
    } else {
      return this.apiService.UpdateUser({
        id: this.currentUser.value,
        username
      });
    }
  }

  private saveUserWithImage(username: string, fileKey): Promise<UpdateUserMutation> {
    return this.apiService.UpdateUser({
      id: this.currentUser.value,
      profile_image: fileKey.key,
      username
    });
  }
}
