import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DebateService} from '../../services/debate/debate.service';
import {Debate} from '../../interfaces/Debate';
import {DebateTags} from '../../enums/Tags';
import {TeamModel} from '../../interfaces/TeamModel';
import {CustomUser} from '../../interfaces/CustomUser';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.sass']
})
export class ChatPageComponent implements OnInit {

  debate: Debate;
  memberState: TeamModel;
  user: CustomUser;
  daysRemaining: number;
  isNoLongerOpen = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private debateService: DebateService) {
  }

  ngOnInit(): void {
    this.getDebate();
    this.getUser();
    this.subscribeToTeamState();
    this.setTeamState();
    this.daysRemaining = this.getDateLeft();
  }

  getDebate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.debateService.getDebateById(id).subscribe(
      debate => this.debate = debate
    );
  }

  getUser(): void {
    this.user = this.userService.getCurrentUser();
  }

  setTeamState(): void {
    this.debateService.updateUserState(this.debate, this.user);
  }

  subscribeToTeamState(): void {
    this.debateService.userMember.subscribe(
      memberMap => {
        this.memberState = memberMap;
      }
    );
  }

  get tag() {
    return DebateTags[this.debate.tag];
  }

  getCurrentMembers(): number {
    return (this.debate.team1.members?.length || 0) + (this.debate.team2.members?.length || 0);
  }

  getDateLeft(): number {
    const daysLeft = this.debateService.getDaysLeft(this.debate);
    daysLeft === 0 ? this.isNoLongerOpen = true : this.isNoLongerOpen = false;
    return daysLeft;
  }
}
