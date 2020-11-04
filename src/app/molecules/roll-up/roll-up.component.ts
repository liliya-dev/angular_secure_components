import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roll-up',
  templateUrl: './roll-up.component.html',
  styleUrls: ['./roll-up.component.scss']
})

export class RollUpComponent {
  @Input() title: string;
  @Input() number: number;

  isOpen: boolean = false;
  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
