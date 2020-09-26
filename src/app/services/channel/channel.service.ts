import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {APIService, CreateChannelMutation} from '../../API.service';
import {CustomApiService} from '../../custom-api.service';
import {CustomChannelsList, CustomCreateChannel, CustomSpecificChannel, MappedDebate} from '../../custom-types';
import {DebateService} from '../debate/debate.service';

type NewChannel = {
  title: string
  description: string
};

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(
    private userService: UserService,
    private debateService: DebateService,
    private apiService: APIService,
    private customAPIService: CustomApiService
  ) {
  }

  createChannel(newChannel: NewChannel): Promise<CreateChannelMutation> {
    return this.apiService.CreateChannel({
      channelCreatedById: this.userService.currentUser.value,
      description: newChannel.description,
      name: newChannel.title
    });
  }

  getChannelById(id: string): Promise<CustomSpecificChannel> {
    return this.customAPIService.GetSpecificChannel(id);
  }

  getChannelDebates(id: string): Promise<MappedDebate[]> {
    return this.customAPIService.GetDetailedChannelDebates(id).then(response =>
      this.debateService.mapDebates(response)
    );
  }

  async getChannels(): Promise<CustomChannelsList> {
    return this.customAPIService.GetChannelsList(100);
  }

  async getUserChannels(): Promise<CustomCreateChannel[]> {
    return this.customAPIService.GetChannelsList(100).then(
      result => result.items.filter(channel =>
        channel.members.items.map(user =>
          user.user.id).includes(this.userService.currentUser.value))
    );
  }

  listenForNewChannels() {
    return this.customAPIService.OnCreateChannelListener;
  }

  listenForNewUserGroupChannels() {
    return this.apiService.OnCreateUserChannelListener;
  }

  listenForRemovedUserGroupChannels() {
    return this.apiService.OnDeleteUserChannelListener;
  }

  async joinChannel(channelId: string) {
    return this.apiService.CreateUserChannel({
      userChannelChannelId: channelId,
      userChannelUserId: this.userService.currentUser.value
    });
  }

  async leaveChannel(channelId: string) {
    return this.customAPIService.GetChannelMembers(channelId).then(
      channelMembers => {
        const channelRelationshipId = channelMembers
          .members
          .items
          .find(item => item.user.id === this.userService.currentUser.value).id;

        return this.apiService.DeleteUserChannel({
          id: channelRelationshipId
        });
      }
    );
  }
}

