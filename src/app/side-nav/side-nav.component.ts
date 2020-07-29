import {Component, OnInit} from '@angular/core';
import {faBook, faBookOpen, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';
import {ChannelService} from '../services/channel/channel.service';
import {OnCreateUserChannelSubscription} from '../API.service';

type Channel = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  userChannels: Channel[] = [];

  faBookOpen = faBookOpen;
  faGraduationCap = faGraduationCap;
  faBook = faBook;

  constructor(
    private userService: UserService,
    private router: Router,
    private channelService: ChannelService) {
  }

  ngOnInit(): void {
    this.getUserChannels();
    this.subscribeToUserChannelEvents();
  }

  getUserChannels() {
    this.userService.getUserChannels().then(it => {
      it.channels.items.map(channel => {
        this.userChannels.push(channel.channel as Channel);
      });
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  private subscribeToUserChannelEvents() {
    this.channelService.listenForNewUserGroupChannels().subscribe((evt) => {
      const data = (evt as any).value.data.onCreateUserChannel as OnCreateUserChannelSubscription;

      if (data.user.id === this.userService.currentUser.value) {
        this.userChannels.push({
          id: data.channel.id,
          name: data.channel.name
        });
      }
    });

    this.channelService.listenForRemovedUserGroupChannels().subscribe((evt) => {
      const data = (evt as any).value.data.onDeleteUserChannel as OnCreateUserChannelSubscription;

      if (data.user.id === this.userService.currentUser.value) {
        const channel = this.userChannels.find(item => item.id === data.channel.id);
        const index = this.userChannels.indexOf(channel);

        if (index > -1) {
          this.userChannels.splice(index, 1);
        }
      }
    });
  }
}
