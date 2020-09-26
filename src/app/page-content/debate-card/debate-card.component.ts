import {Component, Input, OnInit} from '@angular/core';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {MappedDebate, TeamInfo} from '../../custom-types';
import {DebateService} from '../../services/debate/debate.service';
import {TeamService} from '../../services/team/team.service';

type Percentage = {
  team1Percentage: number,
  team2Percentage: number
};

@Component({
  selector: 'app-debate-card',
  templateUrl: './debate-card.component.html',
  styleUrls: ['./debate-card.component.sass']
})
export class DebateCardComponent implements OnInit {

  @Input() debate: MappedDebate;
  teamInfo: TeamInfo;
  ratios: Percentage;

  fabBookMark = faBookmark;

  constructor(
    private debateService: DebateService,
    private teamService: TeamService,
  ) {
  }

  ngOnInit(): void {
    this.checkTeams();
  }

  private checkTeams() {
    this.teamService.getTeamsInfo(this.debate.id).then(teamInfo => {
      this.teamInfo = teamInfo;
      this.ratios = this.mapRatios();
    });
  }

  private mapRatios(): Percentage {
    const divider = this.teamInfo.team1.score + this.teamInfo.team2.score;
    if (divider !== 0) {
      return {
        team1Percentage: Math.round(this.teamInfo.team1.score / divider * 100),
        team2Percentage: Math.round(this.teamInfo.team2.score / divider * 100)
      };
    }
    return {
      team1Percentage: 0,
      team2Percentage: 0
    };
  }
}
