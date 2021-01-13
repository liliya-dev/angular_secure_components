import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

const MIN_GRID_COLUMN_WIDTH = 170;
const MAX_GRID_COLUMN_NUMBER = 3;
const GRID_GAP = 16;
const PADDING = 32;

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})

export class TemplatesListComponent implements OnInit, AfterViewInit {
  @Input() list: { title: string, value: string }[];
  gridColumnsNumber = 3;
  @ViewChild('element') element: ElementRef;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.defineColumnsNumber();
  }

  defineColumnsNumber() {
    const columns = (this.element.nativeElement.clientWidth - PADDING * 2) / (MIN_GRID_COLUMN_WIDTH + GRID_GAP);
    this.gridColumnsNumber = columns > MAX_GRID_COLUMN_NUMBER ? MAX_GRID_COLUMN_NUMBER : Math.floor(columns);
  }

  ngAfterViewInit() {
    this.defineColumnsNumber();
  }

  ngOnInit(): void {
  }
}
