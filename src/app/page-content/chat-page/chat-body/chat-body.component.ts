import {Component, Input, OnInit} from '@angular/core';
import {faPencilAlt, faSyncAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {Debate} from '../../../interfaces/Debate';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../interfaces/user';


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

  isMember: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
    this.determineIfMember();
  }

  getUser(): void {
    this.user = this.userService.getCurrentUser();
  }

  determineIfMember(): void {
    this.isMember = (this.debate.team1.members.includes(this.user) || this.debate.team2.members.includes(this.user));
  }

  isTeam1() {
    return this.debate.team1.members.includes(this.user);
  }
}
