import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ChannelService} from '../../services/channel/channel.service';
import {UserService} from '../../services/user/user.service';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {CustomListDebates, CustomSpecificChannel} from '../../custom-api.service';
import {ChannelMembers} from '../../interfaces/Channel';

@Component({
  selector: 'app-channel-detail-page',
  templateUrl: './channel-detail-page.component.html',
  styleUrls: ['./channel-detail-page.component.sass']
})
export class ChannelDetailPageComponent implements OnInit {

  channelId: string;
  channel: CustomSpecificChannel;
  faUser = faUser;
  channelDebates: CustomListDebates;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private userService: UserService,
  ) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = (): boolean => {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.getChannel();
    this.getChannelDebates();
  }

  getChannel(): void {
    this.channelId = this.route.snapshot.paramMap.get('id');
    this.channelService.getChannelById(this.channelId).then(
      channel => this.channel = channel
    );
  }

  isMember(): boolean {
    const array = this.channel.members.items.map(item => item.user.id);
    return array.includes(this.userService.currentUser.value);
  }

  joinChannel(channelId: string) {
    this.channelService.joinChannel(channelId);
  }

  leaveChannel(chanelId: string) {
    this.channelService.leaveChannel(this.channelId);
  }

  private getChannelDebates() {
    this.channelService.getChannelDebates(this.channelId).then(
      channelDebates => this.channelDebates = channelDebates
    );
    console.log(this.channelDebates);
  }
}
