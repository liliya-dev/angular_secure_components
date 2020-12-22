import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from './helpers';

interface DataItem { 
  category: string, 
  date: number, 
  status: string, 
  os: string, 
  city: string, 
  state: string,
  id: number
};

interface HeaderItem {
  title: string,
  id: string
}

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})

export class ReportTableComponent implements OnInit {
  @Input() initialData: DataItem[];
  @Input() headers: HeaderItem[];
  @Input() selected: number[];

  data: DataItem[] = [];
  forwardOrder: boolean = false;

  checkIfSelected(id: number) {
    return this.selected.includes(id);
  }

  getDate(seconds: number) {
    return formatDate(seconds);
  }

  sortByDate() {
    this.data = this.data.sort((a, b) => {
      return this.forwardOrder ? (a.date - b.date) : (b.date - a.date)
    });
    this.forwardOrder = !this.forwardOrder;
  }

  ngOnInit(): void {
    this.data = this.initialData;
  }
}
