import {Component, Input, OnInit} from '@angular/core';
import {CustomUser} from '../../interfaces/CustomUser';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.sass']
})
export class UserBadgeComponent implements OnInit {

  @Input() user: CustomUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
