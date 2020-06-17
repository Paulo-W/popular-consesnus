import { Component, OnInit } from '@angular/core';
import {SideNavService} from '../services/side-nav/side-nav.service';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.sass']
})
export class SecondNavComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.sideNavService.toggle();
  }
}
