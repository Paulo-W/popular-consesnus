import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DebateService} from '../../services/debate/debate.service';
import {DebateTeams, MappedDebate, Team} from '../../custom-types';
import {TeamService} from '../../services/team/team.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.sass']
})
export class ChatPageComponent implements OnInit {

  debate: MappedDebate;
  teams: DebateTeams;
  members: number;
  debateOngoing = true;

  constructor(
    private route: ActivatedRoute,
    private debateService: DebateService,
    private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.getDebate();
  }

  getDebate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.debateService.getDebateById(id).then(response => {
      this.debate = response;
    });
    this.getTeams(id);
  }

  getTeams(id: string) {
    this.teamService.getTeams(id).then(team => {
        this.teams = team;
        this.setCurrentMembers(team.team1, team.team2);
      }
    );
  }

  setCurrentMembers(team1: Team, team2: Team) {
    this.members = team1.members.items.length + team2.members.items.length;
  }
}
