import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  constructor() {
  }

  public toggle() {
    return this.sidenav.toggle();
  }

}
