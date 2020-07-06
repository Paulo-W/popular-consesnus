import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/User';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.sass']
})
export class UserBadgeComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
