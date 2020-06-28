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

  getChannelInfo(): Observable<Channel[]> {
    return of(CHANNELS);
  }

  searchChannel(term: string): Observable<Channel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array
      return of([]);
    }

    return of(this.containsStrings(term)).pipe(
      tap(x => x.length ?
        console.log(`found heroes matching term "${term}"`) :
        console.log(`no heroes found matching "${term}"`))
    );
  }

  private containsStrings(term): Channel[] {
    const subList = CHANNELS.filter(it => it.name.toLowerCase().includes(term.toLowerCase()));

    console.log(subList);
    return subList;
  }

  removeUser(channel: Channel, userId: number): void {
    const index = channel.members.indexOf(userId);
    if (index > -1) {
      channel.members.splice(index, 1);
      this.userService.leaveChannel(userId, channel.name);
    } else {
      Error(`Could not leave Channel: ${channel.name} user is not a member`);
    }
  }

  addUser(channel: Channel, userId: number): void {
    if (channel.members.find(it => it === userId)) {
      Error(`Could not add user to Channel: ${channel.name} user is already a member`);
    }
    channel.members.push(userId);
    this.userService.addChannel(userId, channel.name);
  }
}

