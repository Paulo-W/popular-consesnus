import {Component, Input, OnInit} from '@angular/core';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {SideNavService} from '../../../services/side-nav/side-nav.service';
import {TeamModel} from '../../../interfaces/TeamModel';
import {User} from '../../../interfaces/User';
import {Debate} from '../../../interfaces/Debate';
import {DebateService} from '../../../services/debate/debate.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.sass']
})
export class ChatFooterComponent implements OnInit {

  @Input() memberState: TeamModel;
  @Input() user: User;
  @Input() debate: Debate;

  faUpload = faUpload;
  sideNavClosed: boolean;

  message: string;

  constructor(
    private sideNavService: SideNavService,
    private debateService: DebateService) {
  }

  ngOnInit(): void {
    this.subscribeToSideNav();
    this.sideNavService.triggerSideNaveState();
  }

  subscribeToSideNav() {
    this.sideNavService.configObservable.subscribe(
      closed => this.sideNavClosed = closed
    );
  }

  getPlaceHolder(): string {
    if (this.memberState.isMember === false) {
      return 'You must join a team to write an argument';
    } else if (this.memberState.team === true) {
      return `Post Something in ${this.debate.team1.name}`;
    } else {
      return `Post Something in ${this.debate.team2.name}`;
    }
  }

  onSubmit() {
    if (!this.message.trim()) {
      // if empty do nothing dont post
      return;
    }

    this.debateService.postMessage(this.message, this.user, this.getTeam());
    this.message = '';
  }

  private getTeam() {
    if (this.memberState.team) {
      return this.debate.team1;
    } else {
      return this.debate.team2;
    }
  }
}
