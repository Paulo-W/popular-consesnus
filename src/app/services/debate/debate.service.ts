import {Injectable} from '@angular/core';
import {Debate, DebateInfo} from '../../interfaces/Debate';
import {Observable, of} from 'rxjs';
import {UserService} from '../user/user.service';
import {DEBATE} from '../../mock/mock-debate';

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  constructor(
    private userService: UserService) {
  }

  saveDebate(debate: Debate): Observable<boolean> {
    return of(this.saveDebateValue(debate));
  }

  private saveDebateValue(debate: Debate): boolean {
    debate.createdBy = this.userService.getCurrentUser();
    debate.id = DEBATE.length + 1;
    debate.team1.members = [debate.createdBy];
    debate.team2.members = [];
    DEBATE.push(debate);

    return true;
  }

  getDebates(): Observable<DebateInfo[]> {
    return of(this.getUserDebates());
  }

  private getUserDebates(): DebateInfo[] {
    const user = this.userService.getCurrentUser();
    console.log();
    return DEBATE
      .filter(it => user.channels.includes(it.channel.name))
      .map(it => new DebateInfo(it, user));
  }


  getDebateById(id: number): Observable<Debate> {
    return of(DEBATE.find(debate => debate.id === id));
  }
}
