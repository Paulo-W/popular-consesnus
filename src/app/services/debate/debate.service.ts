import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {CustomUser} from '../../interfaces/CustomUser';
import {CustomApiService} from '../../custom-api.service';
import {DebateTags} from '../../enums/Tags';
import {APIService} from '../../API.service';
import {TeamService} from '../team/team.service';
import {CustomChannelDebate, CustomCreateChannel, MappedDebate} from '../../custom-types';
import {Router} from '@angular/router';

type DebateForm = {
  id: number;
  title: string;
  description: string;
  createdBy: CustomUser;
  team1: {
    name: string
  };
  team2: {
    name: string
  };
  tag: DebateTags;
  days: number;
  date: Date;
  channel: CustomCreateChannel;
};

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  constructor(
    private apiService: APIService,
    private teamService: TeamService,
    private customAPIService: CustomApiService,
    private router: Router,
    private userService: UserService) {
  }

  async saveDebate(user: string, debate: DebateForm) {
    if (user === this.userService.currentUser.value) {
      this.teamService.createTeam(debate.team1.name, 1).then(
        team1 => {
          this.teamService.joinTeam(team1.id);
          this.teamService.createTeam(debate.team2.name, 2).then(
            team2 => {
              return this.creatDebate(team1.id, team2.id, debate)
                .catch(err => {
                    console.error(`Could not create debate team removing created teams. error: ${err}`);
                    this.teamService.removeTeam(team1.id);
                    this.teamService.removeTeam(team2.id);
                    return null;
                  }
                );
            }
          ).catch(err => {
              this.teamService.removeTeam(team1.id);
              console.error(`Could not create second team removing team 1. error: ${err}`);
              return null;
            }
          );
        }
      );
    } else {
      console.log('Unauthorized error invalid user sent in to save debate method, does not match active user');
      return null;
    }
  }

  private async creatDebate(team1Id: string, team2Id: string, debate: DebateForm) {
    return this.apiService.CreateDebate({
      title: debate.title,
      description: debate.description,
      tag: debate.tag.toString(),
      days: debate.days,
      debateTeam1Id: team1Id,
      debateTeam2Id: team2Id,
      debateCreatedById: this.userService.currentUser.value,
      debateChannelId: debate.channel.id
    }).then(result => {
      this.router.navigate([`/debate/${result.id}`]);
    });
  }

  private async removeDebate(id: string) {
    return this.apiService.DeleteDebate({id});
  }

  getDebateById(id: string): Promise<MappedDebate> {
    return this.customAPIService.FindDebateById(id);
  }

  async getDebates(): Promise<MappedDebate[]> {
    return this.customAPIService.GetDetailedDebates(this.userService.currentUser.value)
      .then(response =>
        response.channels.items.flatMap(rChannels => this.mapDebates(rChannels.channel))
      );
  }

  async getUserInvolvedDebates(): Promise<MappedDebate[]> {
    return this.getDebates().then(debates => {
      return debates.filter(debate => debate.createdBy.id === this.userService.currentUser.value);
    });
  }

  mapDebates(channelDebate: CustomChannelDebate): MappedDebate[] {
    return channelDebate.debates.items.map(debate => {
      return {
        id: debate.id,
        title: debate.title,
        description: debate.description,
        team1: debate.team1,
        team2: debate.team2,
        createdAt: debate.createdAt,
        days: debate.days,
        createdBy: debate.createdBy,
        channel: {
          name: channelDebate.name,
          id: channelDebate.id
        }
      } as MappedDebate;
    });
  }


}
