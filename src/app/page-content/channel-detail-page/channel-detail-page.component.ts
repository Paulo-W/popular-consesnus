import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ChannelService} from '../../services/channel/channel.service';
import {Channel} from '../../interfaces/Channel';
import {CustomUser} from '../../interfaces/CustomUser';
import {UserService} from '../../services/user/user.service';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {DebateService} from '../../services/debate/debate.service';
import {DebateInfo} from '../../interfaces/Debate';

@Component({
  selector: 'app-channel-detail-page',
  templateUrl: './channel-detail-page.component.html',
  styleUrls: ['./channel-detail-page.component.sass']
})
export class ChannelDetailPageComponent implements OnInit {

  channel: Channel;
  user: CustomUser;
  faUser = faUser;
  channelDebates: DebateInfo[];

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
    this.getUser();
    this.getChannelDebates();
  }

  getChannel(): void {
    const channelName = this.route.snapshot.paramMap.get('name');
    this.channel = this.channelService.getChannelByName(channelName);
  }

  getUser(): void {
    this.user = this.userService.getCurrentUser();
  }

  isMember(): boolean {
    return this.channel.members.includes(this.user.id);
  }

  joinChannel() {
    this.channelService.addUser(this.channel, this.user.id);
  }

  leaveChannel() {
    this.channelService.removeUser(this.channel, this.user.id);
  }

  private getChannelDebates() {
    this.channelDebates = this.debateService.getChannelDebates(this.channel);
    console.log(this.channelDebates);
  }
}
