import {Injectable} from '@angular/core';
import {Debate} from '../../interfaces/Debate';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebateService {

  constructor() {
  }

  saveDebate(debate: Debate): Observable<boolean> {
    console.log(debate.title);

    return of(true);
  }
}
