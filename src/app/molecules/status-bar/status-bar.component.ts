import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})

export class StatusBarComponent implements OnInit {
  @Input() activePoints = 1;
  @Input() totalSteps = 6;

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

  ngOnInit(): void {
  }
}
