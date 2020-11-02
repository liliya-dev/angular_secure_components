import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-up',
  templateUrl: './roll-up.component.html',
  styleUrls: ['./roll-up.component.scss']
})

export class RollUpComponent implements OnInit {
  @Input() title: string;
  @Input() number: number;

  isOpen: boolean = false;
  toggleContent() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.title, 11)
  }

}
