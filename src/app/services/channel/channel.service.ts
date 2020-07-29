import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Channel} from '../../interfaces/Channel';
import {CHANNELS} from '../../mock/mock-channel';
import {UserService} from '../user/user.service';
import {APIService, CreateChannelMutation} from '../../API.service';
import {CustomApiService, CustomChannelsList, CustomListDebates, CustomSpecificChannel} from '../../custom-api.service';

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
    private apiService: APIService,
    private customAPIService: CustomApiService
  ) {
  }

  setChannelMember(channelArray: Channel[]): Channel[] {
    const userId = this.userService.getCurrentUser().id;
    channelArray.forEach(it =>
      this.simpleFun(it, userId)
    );

    return channelArray;
  }

  simpleFun(channel: Channel, userId: number) {
    channel.isMember = channel.members.includes(userId);
  }

  getChannel(): Channel[] {
    const user = this.userService.getCurrentUser();
    return CHANNELS.filter(it => user.channels.includes(it.name));
  }

  getChannelById(id: string): Promise<CustomSpecificChannel> {
    return this.customAPIService.GetSpecificChannel(id);
  }

  getChannelDebates(id: string): Promise<CustomListDebates> {
    return this.customAPIService.GetChannelDebates(id);
  }

  async getChannels(): Promise<CustomChannelsList> {
    return this.customAPIService.GetChannelsList(100);
  }

  searchChannel(term: string): void {
    if (!term.trim()) {
      // if not search term, return full array
      // return this.apiService.ListChannels(null, 100);
    }

    // return of(this.containsStrings(term)).pipe(
    //   tap(x => x.length ?
    //     console.log(`found channel matching term "${term}"`) :
    //     console.log(`no channel found matching "${term}"`))
    // );
  }

  private containsStrings(term): Channel[] {
    const subList = CHANNELS.filter(it => it.name.toLowerCase().includes(term.toLowerCase()));
    this.setChannelMember(subList);
    return subList;
  }

  addUser(channel: Channel, userId: number): void {
    if (channel.members.find(it => it === userId)) {
      console.log(`Could not add user to Channel: ${channel.name} user is already a member`);
    }
    channel.isMember = true;
    channel.members.push(userId);
    this.userService.addChannel(userId, channel);
  }

  createChannel(newChannel: NewChannel): Promise<CreateChannelMutation> {
    return  this.apiService.CreateChannel({
      channelCreatedById: this.userService.currentUser.value,
      description: newChannel.description,
      name: newChannel.title
    });
  }

  findByName(name: string): Channel {
    return CHANNELS.find(it => it.name === name);
  }

  getChannelByName(channelName: string): Channel {
    return CHANNELS.find(channel => channel.name === channelName);
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

  joinChannel(channelId: string) {
    this.apiService.CreateUserChannel({
      userChannelChannelId: channelId,
      userChannelUserId: this.userService.currentUser.value
    });
  }

  async leaveChannel(channelId: string) {
    this.customAPIService.GetChannelMembers(channelId).then(
      channelMembers => {
        const channelRelationshipId = channelMembers.members.items.find(item => item.user.id === this.userService.currentUser.value).id;
        this.apiService.DeleteUserChannel({
          id: channelRelationshipId
        });
      }
    );
  }
}

