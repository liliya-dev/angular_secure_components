import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StatusBarComponent implements OnInit {
  activePoints = 1;
  totalSteps = 6;

  moveToNext = () => {
    if (this.activePoints  <  this.totalSteps) {
      this.activePoints = this.activePoints + 1;
    }
  }

  moveToPrevious = () => {
    if (this.activePoints  >  1) {
      this.activePoints = this.activePoints - 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
