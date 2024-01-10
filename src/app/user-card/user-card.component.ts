import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {

  @Input() userName: String="";
  @Input() userProfileImage: string="";
  @Input() additionalInfo: string="";

  constructor() { }

  ngOnInit() {}

}
