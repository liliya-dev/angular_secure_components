import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface InputsData {
  id: string,
  title: string,
  values?: string[],
  initialValue?: string,
  placeholder: string,
  type: string
}

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})

export class ReportModalComponent implements OnInit {
  @Input() inputsData: InputsData[];

  @Output() primaryButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() dangerButtonFunction: EventEmitter<any> = new EventEmitter();

  filterProps = {};

  handleCancel() {
    this.dangerButtonFunction.emit();
  }

  handleApprove() {
    this.primaryButtonFunction.emit();
  }

  handleInputChange(props) {
    this.filterProps[props[1]] = props[0];
  }

  ngOnInit(): void {
    this.inputsData.forEach(item => {
      this.filterProps[item.title] = item.initialValue
    })
  }
}