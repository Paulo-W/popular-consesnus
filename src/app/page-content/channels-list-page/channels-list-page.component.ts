import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ChannelService} from '../../services/channel/channel.service';
import {Channel} from '../../interfaces/Channel';
import {UserService} from '../../services/user/user.service';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-channels-list-page',
  templateUrl: './channels-list-page.component.html',
  styleUrls: ['./channels-list-page.component.sass']
})
export class ChannelsListPageComponent implements OnInit {

  faSearch = faSearch;
  channels: Channel[];
  searchedChannels$: Observable<Channel[]>;
  searchInput = '';
  userId: number;

  private searchTerm = new Subject<string>();


  constructor(private channelService: ChannelService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserId();
    this.getChannels();

    this.searchedChannels$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering a term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.channelService.searchChannel(term))
    );
  }

  getUserId() {
    this.userService.getCurrentUser().subscribe(
      userId => {
        this.userId = userId;
      }
    );
  }

  search(term: string): void {
    this.searchTerm.next(term);
    this.searchInput = term;
  }

  getChannels() {
    this.channelService.getChannelInfo().subscribe(
      channelArray => {
        this.channels = channelArray;
        this.searchedChannels$ = of(channelArray);
      }
    );
  }

  joinChannel(channel: Channel) {
    this.channelService.addUser(channel, this.userId);
  }

  exitChannel(channel: Channel) {
    this.channelService.removeUser(channel, this.userId);
  }
}
