import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.scss'],
})

export class SimpleCounterComponent implements OnInit {
  @Input() initialValue?: number;
  value = 1;

  increaseValue = () => {
    this.value = this.value + 1;
  }

  decreaseValue = () => {
    if (this.value - 1 > 0) {
      this.value = this.value - 1;
    }
  }

  ngOnInit(): void {
    if (this.initialValue) {
      this.value = this.initialValue;
    }
  }
}
