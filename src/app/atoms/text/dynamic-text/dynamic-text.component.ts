import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent implements OnInit, OnChanges {
  @Input() data: any;
  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = this.data.title;
  }

  ngOnChanges(): void {
    this.title = this.data.title;
  }
}
