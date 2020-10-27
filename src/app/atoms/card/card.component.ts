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

  classes: string;

  ngOnChanges() {
    this.classes = this.isActive ? "app-card active" : "app-card";
  }
}
