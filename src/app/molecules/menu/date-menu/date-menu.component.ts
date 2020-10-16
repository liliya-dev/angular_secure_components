import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-menu',
  templateUrl: './date-menu.component.html',
  styleUrls: ['./date-menu.component.scss']
})
export class DateMenuComponent implements OnInit {
  @Input() items: string[];
  active = 0;

  ngOnInit() {
  }
  
  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}
