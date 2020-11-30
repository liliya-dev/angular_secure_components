import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { getRandomColor } from './helpers';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, OnChanges {
  @Input() categories: string[];
  @Input() colorsFromUser: string[];
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() chartHeight: number;
  @Input() columnWidth: number;
  @Input() step: number;

  isTipVisible = false;
  width = 0;
  rows = 0;
  columns = 0;
  rowValues = [];
  gridValues = [];
  tipsBottom = 0;
  tipsLeft = 0;
  colors = [
    "#c98392", "#9ED0E0", "#F6BC59", "#645FCE", "#9ED0E0", "#612C83", "#FF9F68", "#adc9b2", "#c98392", "#9ED0E0", "#F6BC59",
    "#c98392", "#9ED0E0", "#F6BC59", "#645FCE", "#9ED0E0", "#612C83", "#FF9F68", "#adc9b2", "#c98392", "#9ED0E0", "#F6BC59"
  ];

  @ViewChild('list') list: ElementRef;
  @ViewChild('tips') tips: ElementRef;
  @ViewChild('container') container: ElementRef;

  showTips = (event, index) => {
    this.tipsLeft = index * this.columnWidth + 47 - this.list.nativeElement.scrollLeft;
    const height = +event.target.style.height.slice(0, -2);
    this.tipsBottom = height / 2 + 32;
    this.isTipVisible = true;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    const element: HTMLElement = event.target;
    if (this.tips) {
      if (!(element.classList.contains('chart-column__value') || this.tips.nativeElement.contains(event.target))) {
        this.isTipVisible = false;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const minColumnsNumber = Math.floor((this.container.nativeElement.clientWidth - 66) / this.columnWidth);
    if (minColumnsNumber >= this.data.length) {
      this.columns = minColumnsNumber;
      const grid=[]
      for (let i=0; i< this.rows * this.columns; i++) {
        grid.push(i)
      }
      this.gridValues = grid;
      this.width = this.columns * this.columnWidth;
    }
  }

  setStartValues = () => {
    if (!this.colorsFromUser && this.data.length > this.colors.length) {
      const updatedColorsList = [];
      for (let i = 0; i < this.data.length; i++) {
        updatedColorsList.push(getRandomColor());
      }
      this.colors = updatedColorsList;
    }
    const minColumnsNumber = Math.floor((document.querySelector('.chart-column').clientWidth - 66) / this.columnWidth);
    this.rows = this.maxValue / this.step;
    this.columns = this.data.length > minColumnsNumber ? this.data.length : minColumnsNumber;
    this.width = this.columns * this.columnWidth;
    const values =[]
    for (let i=0; i<= this.rows; i++) {
      values.push(i * this.step)
    }
    this.rowValues = values.reverse();
    const grid=[]
    for (let i=0; i< this.rows * this.columns; i++) {
      grid.push(i)
    }
    this.gridValues = grid;
  }

  ngOnInit(): void {
    this.setStartValues();
  }

  ngOnChanges() {
    this.setStartValues();
  }
}
