import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ChannelService} from '../../services/channel/channel.service';
import {UserService} from '../../services/user/user.service';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {DebateService} from '../../services/debate/debate.service';
import {CustomSpecificChannel, MappedDebate} from '../../custom-types';

@Component({
  selector: 'app-channel-detail-page',
  templateUrl: './channel-detail-page.component.html',
  styleUrls: ['./channel-detail-page.component.sass']
})
export class ChannelDetailPageComponent implements OnInit {

  channelId: string;
  channel: CustomSpecificChannel;
  faUser = faUser;
  channelDebates: MappedDebate[];
  memberAction = false;
  isMember = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private userService: UserService,
    private debateService: DebateService
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
    this.checkJoined();
  }

  getChannel(): void {
    this.channelId = this.route.snapshot.paramMap.get('id');
    this.channelService.getChannelById(this.channelId).then(
      channel => this.channel = channel
    );
  }

  checkJoined(): boolean {
    const array = this.channel?.members?.items.map(item => item.user.id);
    if (array) {
      return array.includes(this.userService.currentUser.value);
    }
    return false;
  }

  joinChannel() {
    this.memberAction = true;
    this.channelService.joinChannel(this.channelId).then(() => {
      this.isMember = true;
      this.memberAction = false;
    });
  }

  leaveChannel() {
    this.memberAction = true;
    this.channelService.leaveChannel(this.channelId).then(() => {
      console.log('very quickly');
      this.isMember = false;
      this.memberAction = false;
    });
  }

  private getChannelDebates() {
    this.channelService.getChannelDebates(this.channelId).then(
      channelDebates => {
        this.channelDebates = channelDebates;
      });
  }
}
