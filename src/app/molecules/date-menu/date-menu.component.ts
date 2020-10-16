import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-menu',
  templateUrl: './date-menu.component.html',
  styleUrls: ['./date-menu.component.scss']
})
export class DateMenuComponent implements OnInit {
  titles = [1,2,3];
  constructor() {

  }

  onClickMe() {
  }

  ngOnInit(): void {
  }

}
