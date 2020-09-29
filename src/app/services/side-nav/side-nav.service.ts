import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav: MatSidenav;

  public sideOpenState = new BehaviorSubject<boolean>(false);

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  constructor() {
  }

  public toggle() {
    this.sideOpenState.next(!this.sideOpenState.value);
    return this.sidenav.toggle();
  }
}
