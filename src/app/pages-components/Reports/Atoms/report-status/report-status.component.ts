import { Component, Input, OnChanges, OnInit } from '@angular/core';

const ACCEPT_COLOR = 'linear-gradient(89.52deg, #24B04B -46.17%, #0263BC 186.99%)';
const DECLINE_COLOR = '#EA2D2D';
const NON_SELECTED_COLOR = '#F6BC59';

@Component({
  selector: 'app-report-status',
  templateUrl: './report-status.component.html',
  styleUrls: ['./report-status.component.scss']
})

export class ReportStatusComponent implements OnInit, OnChanges {
  @Input() status: string;

  title = '';
  color = '';

  setProps() {
    switch(this.status) {
      case 'decline': 
        this.title = 'Decline';
        this.color = DECLINE_COLOR;
        break;
      case 'accept': 
        this.title = 'Accept';
        this.color = ACCEPT_COLOR;
        break;
      case 'non-selected': 
        this.title = 'Non-selected';
        this.color = NON_SELECTED_COLOR;
        break;
      default: 
        this.title = 'Non-selected';
        this.color = NON_SELECTED_COLOR;
    }
  }

  ngOnInit(): void {
    this.setProps();
  }

  ngOnChanges(): void {
    this.setProps();
  }
}
