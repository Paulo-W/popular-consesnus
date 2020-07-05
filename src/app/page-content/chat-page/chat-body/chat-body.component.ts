import {Component, Input, OnInit} from '@angular/core';
import {faPencilAlt, faSyncAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {Debate} from '../../../interfaces/Debate';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../interfaces/user';
import {DebateService} from '../../../services/debate/debate.service';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.sass']
})
export class ChatBodyComponent implements OnInit {

  @Input() debate: Debate;
  user: User;

  faPencil = faPencilAlt;
  faUser = faUser;
  faSyncAlt = faSyncAlt;

  constructor(
    private userService: UserService,
    private debateService: DebateService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.user = this.userService.getCurrentUser();
  }

  isMember(): boolean {
    return this.debate.team1.members.includes(this.user) || this.debate.team2.members.includes(this.user);
  }

  isTeam1() {
    return this.debate.team1.members.includes(this.user);
  }

  joinTeam1() {
    this.debateService.joinDebateTeam(this.debate.team1, this.user);
  }

  joinTeam2() {
    this.debateService.joinDebateTeam(this.debate.team2, this.user);
  }

  switchTeams() {
    this.debateService.switchTeams(this.debate, this.user, this.isTeam1());
  }
}
