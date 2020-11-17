import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-center-text',
  templateUrl: './card-with-center-text.component.html',
  styleUrls: ['./card-with-center-text.component.scss']
})

export class CardWithCenterTextComponent {
  @Input() value: string;
  @Input() text: string;
  @Input() title: string;
}
