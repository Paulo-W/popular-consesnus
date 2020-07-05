import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DebateService} from '../../services/debate/debate.service';
import {Debate} from '../../interfaces/Debate';
import {DebateTags} from '../../enums/Tags';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.sass']
})
export class ChatPageComponent implements OnInit {

  debate: Debate;

  constructor(
    private route: ActivatedRoute,
    private debateService: DebateService
  ) {
  }

  ngOnInit(): void {
    this.getDebate();
  }

  getDebate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.debateService.getDebateById(id).subscribe(
      debate => this.debate = debate
    );
  }

  get tag() {
    return DebateTags[this.debate.tag];
  }

  getCurrentMembers(): number {
    return (this.debate.team1.members?.length || 0) + (this.debate.team2.members?.length || 0);
  }
}
