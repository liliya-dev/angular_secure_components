import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-rounded-layout',
  templateUrl: './white-rounded-layout.component.html',
  styleUrls: ['./white-rounded-layout.component.scss']
})

export class WhiteRoundedLayoutComponent {
  @Input() titles: string[];
}
