import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnChanges {
  @Input() text: string;
  @Input() title: string;
  @Input() src: string;
  @Input() isActive: string;

  classes;

  constructor() { }

  ngOnChanges() {
    console.log(this.title, this.isActive,'yugbuiguyg')
    this.classes = this.isActive ? "app-card active" : "app-card";
  }
}
