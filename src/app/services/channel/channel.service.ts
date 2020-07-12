import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Channel} from '../../interfaces/Channel';
import {CHANNELS} from '../../mock/mock-channel';
import {tap} from 'rxjs/operators';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private userService: UserService) {
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

  searchChannel(term: string): Observable<Channel[]> {
    if (!term.trim()) {
      // if not search term, return full array
      this.setChannelMember(CHANNELS);
      return of(CHANNELS);
    }

    return of(this.containsStrings(term)).pipe(
      tap(x => x.length ?
        console.log(`found channel matching term "${term}"`) :
        console.log(`no channel found matching "${term}"`))
    );
  }

  private containsStrings(term): Channel[] {
    const subList = CHANNELS.filter(it => it.name.toLowerCase().includes(term.toLowerCase()));
    this.setChannelMember(subList);
    return subList;
  }

  removeUser(channel: Channel, userId: number): void {
    const index = channel.members.indexOf(userId);
    if (index > -1) {
      channel.members.splice(index, 1);
      channel.isMember = false;
      this.userService.leaveChannel(userId, channel);
    } else {
      console.log(`Could not leave Channel: ${channel.name} user is not a member`);
    }
  }

  addUser(channel: Channel, userId: number): void {
    if (channel.members.find(it => it === userId)) {
      console.log(`Could not add user to Channel: ${channel.name} user is already a member`);
    }
    channel.isMember = true;
    channel.members.push(userId);
    this.userService.addChannel(userId, channel);
  }

  createChannel(newChannel: Channel): Observable<boolean> {
    const user = this.userService.getCurrentUser();

    console.log(newChannel);

    newChannel.members = [];
    newChannel.createdBy = user;
    this.addUser(newChannel, user.id);
    CHANNELS.push(newChannel);
    return of(true);
  }

  findByName(name: string): Channel {
    return CHANNELS.find(it => it.name === name);
  }

  getChannelByName(channelName: string): Channel {
    return CHANNELS.find(channel => channel.name === channelName);
  }
}

