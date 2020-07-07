import {Component, Input, OnInit} from '@angular/core';
import {faPencilAlt, faSyncAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {Debate} from '../../../interfaces/Debate';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../interfaces/User';
import {DebateService} from '../../../services/debate/debate.service';
import {TeamModel} from '../../../interfaces/TeamModel';
import {Team} from '../../../interfaces/Team';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.sass']
})
export class ChatBodyComponent implements OnInit {

  @Input() debate: Debate;
  @Input() user: User;
  @Input() memberState: TeamModel;

  faPencil = faPencilAlt;
  faUser = faUser;
  faSyncAlt = faSyncAlt;

  constructor(
    private userService: UserService,
    private debateService: DebateService) {
  }

  ngOnInit(): void {
  }

  joinTeam1() {
    this.debateService.joinDebateTeam(this.debate, this.debate.team1, this.user);
  }

  joinTeam2() {
    this.debateService.joinDebateTeam(this.debate, this.debate.team2, this.user);
  }

  switchTeams() {
    this.debateService.switchTeams(this.debate, this.user, this.memberState.team);
  }

  isOpposingMember(team: Team): boolean {
    return this.memberState.isMember && !team.members.includes(this.user);
  }

}
