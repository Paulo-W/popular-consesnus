import {Component, OnInit} from '@angular/core';
import {faReplyAll, faSearch} from '@fortawesome/free-solid-svg-icons';
import {ChannelService} from '../../services/channel/channel.service';
import {Channel} from '../../interfaces/Channel';
import {UserService} from '../../services/user/user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, shareReplay, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-channels-list-page',
  templateUrl: './channels-list-page.component.html',
  styleUrls: ['./channels-list-page.component.sass']
})
export class ChannelsListPageComponent implements OnInit {

  faSearch = faSearch;
  faReplyAll = faReplyAll;
  channels: Channel[];
  searchedChannels$: Observable<Channel[]>;
  searchInput = '';
  userId: number;

  private searchTerm = new BehaviorSubject<string>(``);

  constructor(private channelService: ChannelService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserId();

    this.searchedChannels$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering a term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.channelService.searchChannel(term)),

      shareReplay(1)
    );
  }

  getUserId() {
    this.userId = this.userService.getCurrentUser().id;
  }

  search(term: string): void {
    this.searchTerm.next(term);
    this.searchInput = term;
  }

  joinChannel(channel: Channel) {
    this.channelService.addUser(channel, this.userId);
  }

  leaveChannel(channel: Channel) {
    this.channelService.removeUser(channel, this.userId);
  }
}
