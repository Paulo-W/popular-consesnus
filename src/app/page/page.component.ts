import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SideNavService} from '../services/side-nav/side-nav.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private sidenavService: SideNavService) {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnInit(): void {

  }

}
