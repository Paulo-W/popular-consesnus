import {Injectable} from '@angular/core';
import {Debate, DebateInfo} from '../../interfaces/Debate';
import {Observable, of, Subject} from 'rxjs';
import {UserService} from '../user/user.service';
import {DEBATE} from '../../mock/mock-debate';
import {Team} from '../../interfaces/Team';
import {User} from '../../interfaces/User';
import {TeamModel} from '../../interfaces/TeamModel';

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  constructor(
    private userService: UserService) {
  }

  public userMember = new Subject<TeamModel>();

  saveDebate(debate: Debate): Observable<boolean> {
    return of(this.saveDebateValue(debate));
  }

  updateUserState(debate: Debate, user: User) {
    this.userMember.next(this.isMember(debate, user));
  }

  private isMember(debate: Debate, user: User): TeamModel {
    if (debate.team1.members.includes(user)) {
      return new TeamModel(true, true);
    } else if (debate.team2.members.includes(user)) {
      return new TeamModel(true, false);
    }
    return new TeamModel(false, false);
  }


  private saveDebateValue(debate: Debate): boolean {
    debate.createdBy = this.userService.getCurrentUser();
    debate.id = DEBATE.length + 1;
    debate.team1.members = [debate.createdBy];
    debate.team2.members = [];
    DEBATE.push(debate);

    return true;
  }

  getDebates(): Observable<DebateInfo[]> {
    return of(this.getUserDebates());
  }

  private getUserDebates(): DebateInfo[] {
    const user = this.userService.getCurrentUser();
    console.log();
    return DEBATE
      .filter(it => user.channels.includes(it.channel.name))
      .map(it => new DebateInfo(it, user));
  }


  getDebateById(id: number): Observable<Debate> {
    return of(DEBATE.find(debate => debate.id === id));
  }

  joinDebateTeam(debate: Debate, team: Team, currentUser: User): void {
    if (!team.members) {
      team.members = [];
      team.members.push(currentUser);

      return;
    }

    if (team.members.includes(currentUser)) {
      this.userService.removeUser(team.members, currentUser);
    } else {
      team.members.push(currentUser);
    }

    this.updateUserState(debate, currentUser);
  }

  switchTeams(debate: Debate, user: User, isTeam1: boolean) {
    if (isTeam1) {
      this.userService.removeUser(debate.team1.members, user);
      debate.team2.members.push(user);
    } else if (debate.team2.members.includes(user)) {
      this.userService.removeUser(debate.team2.members, user);
      debate.team1.members.push(user);
    } else {
      console.log('could not switch teams user is not a member');
    }

    this.updateUserState(debate, user);
  }
}
