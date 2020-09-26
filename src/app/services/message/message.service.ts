import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {MessageInfo} from '../../custom-types';
import {APIService, CreateMessageInput} from '../../API.service';
import {CustomApiService} from '../../custom-api.service';
import {Storage} from 'aws-amplify';
import {UUID} from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private userService: UserService,
    private apiService: APIService,
    private customApiService: CustomApiService
  ) {
  }

  listenForNewMessages() {
    return this.customApiService.OnCreateMessageListener;
  }

  async createMessage(teamId: string, message: string, file: File, fileType: string): Promise<string> {
    if (file) {
      Storage.put(`${UUID.UUID()}.${fileType}`, file, {contentType: 'image/*'}).then(
        key => {
          return this.saveMessageFrom(message, teamId, key);
        }
      );
    } else {
      return this.saveMessage({
        content: message,
        messageCreatedById: this.userService.currentUser.value,
        messageTeamIdId: teamId,
        teamMessagesId: teamId,
      });
    }
  }

  private saveMessageFrom(message: string, teamId: string, filename) {
    return this.apiService.CreateMessage({
        content: message,
        messageCreatedById: this.userService.currentUser.value,
        teamMessagesId: teamId,
        messageTeamIdId: teamId,
        image: filename.key
      }
    );
  }

  private saveMessage(creteMessage: CreateMessageInput): Promise<string> {
    return this.apiService.CreateMessage(creteMessage).then(response => response.id);
  }

  async getMessages(teamId: string): Promise<MessageInfo[]> {
    return this.customApiService.GetTeamMessages(teamId);
  }

  async likeMessage(message: MessageInfo): Promise<MessageInfo> {
    message.likeUsers = this.addVoteIfDoesNotExist(message.likeUsers);
    message.dislikeUsers = this.removeUserIfExist(message.dislikeUsers);
    return this.updateMessage(message);
  }

  async dislikeMessage(message: MessageInfo): Promise<MessageInfo> {
    message.likeUsers = this.removeUserIfExist(message.likeUsers);
    message.dislikeUsers = this.addVoteIfDoesNotExist(message.dislikeUsers);
    return this.updateMessage(message);
  }

  private addVoteIfDoesNotExist(array: string[]) {
    if (array?.includes(this.userService.currentUser.value)) {
      return this.removeUserIfExist(array);
    } else {
      if (!array) {
        array = [];
      }
      array.push(this.userService.currentUser.value);
      return array;
    }
  }

  private removeUserIfExist(array: string[]) {
    const index = array?.indexOf(this.userService.currentUser.value);

    if (array && index !== null && index !== -1) {
      array.splice(index, 1);
    }

    return array;
  }

  private updateMessage(messageInfo: MessageInfo): Promise<MessageInfo> {
    return this.apiService.UpdateMessage({
      id: messageInfo.id,
      content: messageInfo.content,
      dislikeUsers: messageInfo.dislikeUsers,
      likeUsers: messageInfo.likeUsers
    }).then(() => messageInfo);
  }
}
