import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @Input() categories: string[];
  @Input() data: number[];
  @Input() maxValue: number;
  isTipVisible = false;
  chartHeight=300;
  step = 200;
  rows = 4;
  rowValues = [];
  gridValues = [];
  tipsTop = 0;
  tipsLeft = 0;
  columns = 0;
  colors = ["#c98392", "#9ED0E0", "#F6BC59", "#645FCE", "#9ED0E0", "#612C83", "#FF9F68", "#adc9b2", "#c98392", "#9ED0E0", "#F6BC59"];

  @ViewChild('tips') tips: ElementRef;

  showTips = (event, index) => {
    this.isTipVisible = true;
    const width = this.tips.nativeElement.clientWidth;
    const height = this.tips.nativeElement.clientHeight;
    this.tips.nativeElement.style.top = '20px'
    console.log(this.tips.nativeElement.style)
  }

  hideTips = () => {
    this.isTipVisible = false;
  }

  ngOnInit(): void {
    this.columns = this.data.length > 6 ? this.data.length : 6
    const values =[]
    for (let i=0; i<= this.rows; i++) {
      values.push(i * this.step)
    }
    this.rowValues = values.reverse();
    const grid=[]
    for (let i=0; i< this.rows * this.data.length; i++) {
      grid.push(i)
    }
    this.gridValues = grid;
  }
}
