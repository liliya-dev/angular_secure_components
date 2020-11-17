import { Component, OnChanges, Input } from '@angular/core';
import { detectClasses } from './helpers';

@Component({
  selector: 'app-status-steps-dynamic',
  templateUrl: './status-steps-dynamic.component.html',
  styleUrls: ['./status-steps-dynamic.component.scss']
})

export class StatusStepsDynamicComponent implements OnChanges {
  @Input() activePoints: number;
  @Input() totalNumber: number;
  @Input() titles: string[];
  @Input() background?: string;

  list = [];
  classesDots: string[] = [];
  classesLines: string[] = [];
  sectionWidth = '';

  ngOnChanges(): void {
    const newList = [];
    for (let i = 0; i < this.totalNumber; i++) {
      newList.push(i)
    }
    this.list = newList;
    this.classesDots = detectClasses(this.totalNumber, this.activePoints, newList).classListDots;
    this.classesLines = detectClasses(this.totalNumber, this.activePoints, newList).classListLines;
    this.sectionWidth = `${(100 - 1) / (this.totalNumber - 1)}%`;
  }
}
