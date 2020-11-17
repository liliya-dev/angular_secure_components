import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-columns-text',
  templateUrl: './card-with-columns-text.component.html',
  styleUrls: ['./card-with-columns-text.component.scss']
})

export class CardWithColumnsTextComponent {
  @Input() values: string[];
  @Input() texts: string[];
  @Input() title: string;
}
