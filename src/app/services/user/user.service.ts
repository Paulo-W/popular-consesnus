import {Injectable} from '@angular/core';
import {User} from '../../interfaces/user';
import {USERS} from '../../mock/mock-user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: Observable<number>;

  constructor() {
  }

  getUserById(id: number): Observable<User> | undefined {
    return of(USERS.find(user => user.id === 1));
  }

}
