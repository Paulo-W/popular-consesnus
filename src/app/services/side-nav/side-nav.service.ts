import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav: MatSidenav;
  public sideNavClosed = false;

  public configObservable = new Subject<boolean>();

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    this.changeSideNavState(this.sideNavClosed);
  }

  constructor() {
  }

  public toggle() {
    this.sideNavClosed = !this.sideNavClosed;
    this.changeSideNavState(this.sideNavClosed);
    return this.sidenav.toggle();
  }

  changeSideNavState(val) {
    this.configObservable.next(val);
  }

  triggerSideNaveState() {
    this.configObservable.next(this.sideNavClosed);
  }

}
