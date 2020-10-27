import { Component, Input, OnChanges } from '@angular/core';
import { detectClasses } from './helpers';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})

export class StepsComponent implements OnChanges {
  @Input() activePoints: number;
  classes: string[] = [];
  
  ngOnChanges(): void {
    this.classes = detectClasses(this.activePoints);
  }
}
