import {Component, Input, OnInit} from '@angular/core';
import {faPencilAlt, faSyncAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../../services/user/user.service';
import {DebateService} from '../../../services/debate/debate.service';
import {DebateTeams, MemberReference} from '../../../custom-types';
import {TeamService} from '../../../services/team/team.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.sass']
})
export class ChatBodyComponent implements OnInit {

  @Input() teams: DebateTeams;
  @Input() team1Name: string;
  @Input() team2Name: string;

  faPencil = faPencilAlt;
  faUser = faUser;
  faSyncAlt = faSyncAlt;

  debateOngoing = true;

  isFirstTeam = false;
  isSecondTeam = false;

  clicked = false;
  closeResult = '';

  constructor(
    private userService: UserService,
    private debateService: DebateService,
    private teamService: TeamService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.mapTeams();
    this.subscribeToTeams();
  }

  private mapTeams() {
    this.teamService.isFirstTeam.next(this.teamService.includesUser(this.teams.team1.members.items));
    this.teamService.isSecondTeam.next(this.teamService.includesUser(this.teams.team2.members.items));
  }

  private subscribeToTeams() {
    this.teamService.isFirstTeam.subscribe(item => this.isFirstTeam = item);
    this.teamService.isSecondTeam.subscribe(item => this.isSecondTeam = item);
  }

  joinTeam1() {
    if (this.debateOngoing) {
      this.clicked = true;
      this.teamService.joinTeam(this.teams.team1.id).then(
        newRelationship => {
          this.clicked = false;
          this.teams.team1.members.items.push(newRelationship);
          this.teamService.isFirstTeam.next(true);
        }
      );
    }
  }

  joinTeam2() {
    if (this.debateOngoing) {
      this.clicked = true;
      this.teamService.joinTeam(this.teams.team2.id).then(
        newRelationship => {
          this.clicked = false;
          this.teams.team2.members.items.push(newRelationship);
          this.teamService.isSecondTeam.next(true);
        }
      );
    }
  }

  switchTeams() {
    this.clicked = true;
    if (this.isFirstTeam) {
      this.teamService.switchTeams(this.teams.team1, this.teams.team2.id).then(newRelationShip => {
          this.teamService.isFirstTeam.next(false);
          this.teamService.isSecondTeam.next(true);
          this.removeMember(this.teams.team1.members.items);
          this.teams.team2.members.items.push(newRelationShip);
          this.clicked = false;
        }
      );
    } else {
      this.teamService.switchTeams(this.teams.team2, this.teams.team1.id).then(newRelationShip => {
          this.teamService.isFirstTeam.next(true);
          this.teamService.isSecondTeam.next(false);
          this.removeMember(this.teams.team2.members.items);
          this.teams.team1.members.items.push(newRelationShip);
          this.clicked = false;
        }
      );
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then();
  }

  getTeamName(): string {
    return this.isFirstTeam ? this.team1Name : this.team2Name;
  }

  leaveTeam() {
    this.clicked = true;
    if (this.isFirstTeam) {
      this.teamService.leaveTeam(this.teams.team1.members).then(() => {
          this.clicked = false;
          this.teamService.isFirstTeam.next(false);
          this.removeMember(this.teams.team1.members.items);
        }
      );
    } else {
      this.teamService.leaveTeam(this.teams.team2.members).then(() => {
        this.clicked = false;
        this.teamService.isSecondTeam.next(false);
        this.removeMember(this.teams.team2.members.items);
      });
    }
  }

  private removeMember(members: [MemberReference]) {
    const index = members.indexOf(members.find(item => item.user.id === this.userService.currentUser.value));

    if (index !== -1) {
      members.splice(index, 1);
    }
  }
}
