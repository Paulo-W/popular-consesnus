import {Component, OnInit} from '@angular/core';
import {DebateService} from '../../services/debate/debate.service';
import {MappedDebate} from '../../custom-types';

@Component({
  selector: 'app-my-debates',
  templateUrl: './my-debates.component.html',
  styleUrls: ['./my-debates.component.sass']
})
export class MyDebatesComponent implements OnInit {

  userDebates: MappedDebate[];

  constructor(
    private debateService: DebateService
  ) {
  }

  ngOnInit(): void {
    this.getUserDebates();
  }

  getUserDebates() {
    this.debateService.getUserInvolvedDebates().then(debates => {
      this.userDebates = debates;
    });
  }
}
