import {Injectable} from '@angular/core';
import {APIService, CreateTeamMutation, CreateUserTeamMutation} from '../../API.service';
import {UserService} from '../user/user.service';
import {DebateTeams, MemberReference, MessageUserList, Team, TeamInfo} from '../../custom-types';
import {CustomApiService} from '../../custom-api.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private apiService: APIService,
    private customAPIService: CustomApiService,
    private userService: UserService) {
  }

  isFirstTeam = new BehaviorSubject<boolean>(false);
  isSecondTeam = new BehaviorSubject<boolean>(false);

  async createTeam(name: string, teamNumber: number): Promise<CreateTeamMutation> {
    return this.apiService.CreateTeam({
        name,
        team: teamNumber
      }
    );
  }

  async removeTeam(id: string) {
    return this.apiService.DeleteTeam({
      id
    });
  }

  async joinTeam(teamId: string): Promise<CreateUserTeamMutation> {
    return this.apiService.CreateUserTeam({
        userTeamUserId: this.userService.currentUser.value,
        userTeamTeamId: teamId
      }
    );
  }

  async leaveTeam(members: { items: [MemberReference] }) {
    const oldTeamRelationship = members.items.find(teamMember =>
      teamMember.user.id === this.userService.currentUser.value
    );

    return this.apiService.DeleteUserTeam({id: oldTeamRelationship.id});
  }

  async switchTeams(oldTeam: Team, newTeam: string): Promise<CreateUserTeamMutation> {
    return this.leaveTeam(oldTeam.members).then(() => this.joinTeam(newTeam));
  }

  getTeams(id: string): Promise<DebateTeams> {
    return this.customAPIService.GetDebateTeams(id);
  }

  getTeamsInfo(id: string): Promise<TeamInfo> {
    return this.customAPIService.GetDebateTeams(id).then(response =>
      this.mapTeamInfo(response)
    );
  }

  private mapTeamInfo(response: DebateTeams): TeamInfo {
    return {
      team1: {
        isMember: this.includesUser(response.team1.members.items),
        score: this.mapTeamScore(response.team1.messages.items)
      },
      team2: {
        isMember: this.includesUser(response.team2.members?.items),
        score: this.mapTeamScore(response.team2.messages.items)
      }
    } as TeamInfo;
  }

  includesUser(items: [MemberReference]): boolean {
    return items.map(member => member.user.id).includes(this.userService.currentUser.value);
  }

  private mapTeamScore(messages: [MessageUserList]): number {
    const likeScore = Math.max(0, messages?.reduce((sum: number, message: MessageUserList) => sum + message.likeUsers?.length, 0));
    const dislikeScore = Math.max(0, messages?.reduce((sum: number, message: MessageUserList) => sum + message.dislikeUsers?.length, 0));

    if (!likeScore) {
      return 0;
    }

    if (!dislikeScore) {
      return Math.max(0, likeScore);
    }

    return Math.max(0, (likeScore - dislikeScore));
  }


}
