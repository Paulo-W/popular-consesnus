import {Component, OnInit} from '@angular/core';
import {DebateInfo} from '../../interfaces/Debate';
import {DebateService} from '../../services/debate/debate.service';

@Component({
  selector: 'app-my-debates',
  templateUrl: './my-debates.component.html',
  styleUrls: ['./my-debates.component.sass']
})
export class MyDebatesComponent implements OnInit {

  userDebates: DebateInfo[];

  constructor(private debateService: DebateService) {
    this
  }

  ngOnInit(): void {
    this.getUserDebates();
  }

  getUserDebates() {
    this.userDebates = this.debateService.getUserInvolvedDebates();
  }
}
