import {Component, OnInit} from '@angular/core';
import {faReplyAll, faSearch} from '@fortawesome/free-solid-svg-icons';
import {ChannelService} from '../../services/channel/channel.service';
import {UserService} from '../../services/user/user.service';
import {BehaviorSubject} from 'rxjs';
import {OnCreateUserChannelSubscription} from '../../API.service';
import {ChannelList, ChannelMembers} from '../../interfaces/Channel';
import {CustomChannelsList, CustomCreateChannel} from '../../custom-types';

type ChannelClickInfo = {
  id: string;
  clicked: boolean;
};

@Component({
  selector: 'app-channels-list-page',
  templateUrl: './channels-list-page.component.html',
  styleUrls: ['./channels-list-page.component.sass']
})
export class ChannelsListPageComponent implements OnInit {

  clickedArray: ChannelClickInfo[] = [];

  faSearch = faSearch;
  faReplyAll = faReplyAll;
  channelsList: ChannelList[];
  searchInput = '';

  private searchTerm = new BehaviorSubject<string>(``);

  constructor(
    private channelService: ChannelService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.getChannels();
    this.subscribeToChannelCreation();
    this.subscribeToUserChanelEvents();
  }

  getChannels() {
    this.channelService.getChannels().then(
      channel => {
        this.channelsList = this.mapChannelList(channel);
      });
  }

  subscribeToChannelCreation() {
    this.channelService.listenForNewChannels().subscribe((evt) => {
      const data = (evt as any).value.data.onCreateChannel;

      this.channelsList.push({
        id: data.id,
        name: data.name,
        members: data.members.items?.map(item => this.mapMembers(item))
      });
    });
  }

  private subscribeToUserChanelEvents() {
    this.channelService.listenForNewUserGroupChannels().subscribe((evt) => {
      const data = (evt as any).value.data.onCreateUserChannel as OnCreateUserChannelSubscription;
      this.channelsList.find(listedChannel => listedChannel.id === data.channel.id).members?.push({
        relationshipId: data.id,
        userId: data.user.id
      });

      if (this.clickedArray.find(clickInfo => clickInfo.id === data.channel.id)) {
        this.clickedArray.find(clickInfo => clickInfo.id === data.channel.id).clicked = false;
      }
    });

    this.channelService.listenForRemovedUserGroupChannels().subscribe((evt) => {
      const data = (evt as any).value.data.onDeleteUserChannel as OnCreateUserChannelSubscription;

      const item = this.channelsList.find(listedChannel => listedChannel.id === data.channel.id);
      const oldRelationship = item.members.find(it => it.relationshipId === data.id);
      const index = item.members.indexOf(oldRelationship);

      if (index > -1) {
        item.members.splice(index, 1);
      }
      this.clickedArray.find(clickInfo => clickInfo.id === data.channel.id).clicked = false;
    });
  }

  search(term: string): void {
    this.searchTerm.next(term);
    this.searchInput = term;
  }

  joinChannel(channelId: string) {
    this.clickedArray.find(clickInfo => clickInfo.id === channelId).clicked = true;
    this.channelService.joinChannel(channelId);
  }

  leaveChannel(channelId: string) {
    this.clickedArray.find(clickInfo => clickInfo.id === channelId).clicked = true;
    this.channelService.leaveChannel(channelId);
  }

  isMember(items: [{ userId: string; relationshipId: string }]): boolean {
    if (items.length > 0) {
      const userId = this.userService.currentUser.value;
      let isMember = false;
      items.forEach(member => {
        if (member.userId === userId) {
          isMember = true;
          return;
        }
      });
      return isMember;
    }
    return false;
  }

  private mapChannelList(channel: CustomChannelsList): ChannelList[] {
    return channel.items.map(it => {
      this.clickedArray.push({
        id: it.id,
        clicked: false
      });
      return this.mapChannel(it);
    });
  }

  private mapChannel(queryChannel: CustomCreateChannel): ChannelList {
    return {
      id: queryChannel.id,
      name: queryChannel.name,
      members: queryChannel.members.items.map(it => this.mapMembers(it))
    } as ChannelList;
  }

  private mapMembers(queryMember: { id: string; user: { id: string } }): ChannelMembers {
    return {
      userId: queryMember.user.id,
      relationshipId: queryMember.id
    };
  }
}
