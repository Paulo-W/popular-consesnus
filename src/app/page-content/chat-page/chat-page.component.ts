import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DebateService} from '../../services/debate/debate.service';
import {DebateTeams, MappedDebate, Team} from '../../custom-types';
import {TeamService} from '../../services/team/team.service';
import {SideNavService} from '../../services/side-nav/side-nav.service';

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
  sideNavClosed: boolean;

  constructor(
    private route: ActivatedRoute,
    private debateService: DebateService,
    private teamService: TeamService,
    private sideNavService: SideNavService
  ) {
  }

  ngOnInit(): void {
    this.getDebate();
    this.subscribeToSideNav();
  }

  getDebate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.debateService.getDebateById(id).then(response => {
      this.debate = response;
    });
    this.getTeams(id);
  }

  private subscribeToSideNav() {
    this.sideNavService.sideOpenState.subscribe(closed => {
        this.sideNavClosed = closed;
      }
    );
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
