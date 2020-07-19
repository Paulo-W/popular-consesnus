import {Injectable} from '@angular/core';
import {Debate, DebateInfo} from '../../interfaces/Debate';
import {Observable, of, Subject} from 'rxjs';
import {UserService} from '../user/user.service';
import {DEBATE} from '../../mock/mock-debate';
import {Team} from '../../interfaces/Team';
import {CustomUser} from '../../interfaces/CustomUser';
import {TeamModel} from '../../interfaces/TeamModel';
import {MessageInfo} from '../../interfaces/MessageInfo';
import {Channel} from '../../interfaces/Channel';

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

  updateUserState(debate: Debate, user: CustomUser) {
    this.userMember.next(this.isMember(debate, user));
  }

  private isMember(debate: Debate, user: CustomUser): TeamModel {
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
    debate.date = new Date();
    DEBATE.push(debate);

    return true;
  }

  getUserDebates(): DebateInfo[] {
    const user = this.userService.getCurrentUser();
    return DEBATE
      .filter(it => user.channels.includes(it.channel.name))
      .map(it => new DebateInfo(it, user));
  }

  getChannelDebates(channel: Channel): DebateInfo[] {
    const user = this.userService.getCurrentUser();
    return DEBATE
      .filter(debate => debate.channel === channel)
      .map(debate => new DebateInfo(debate, user));
  }

  getDebateById(id: number): Observable<Debate> {
    return of(DEBATE.find(debate => debate.id === id));
  }

  joinDebateTeam(debate: Debate, team: Team, currentUser: CustomUser): void {
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

  switchTeams(debate: Debate, user: CustomUser, isTeam1: boolean) {
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

  postMessage(message: string, user: CustomUser, team: Team) {
    const newMessage: MessageInfo = {
      content: message,
      date: new Date(),
      dislikeUsers: [],
      likeUsers: [],
      likes: 0,
      user
    };

    if (!team.messages) {
      team.messages = [];
    }

    team.messages.push(newMessage);
  }

  getDaysLeft(debate: Debate): number {
    const endDate = new Date(Number(debate.date));
    endDate.setDate(endDate.getDate() + debate.days);

    const remaining = endDate.getDate() - debate.date.getDate();
    return remaining > 0 ? remaining : 0;
  }

  getUserInvolvedDebates(): DebateInfo[] {
    const user = this.userService.getCurrentUser();
    return DEBATE.filter(
      debate => debate.team1.members.includes(user) || debate.team2.members.includes(user)
    ).map(
      it => new DebateInfo(it, user)
    );
  }
}
