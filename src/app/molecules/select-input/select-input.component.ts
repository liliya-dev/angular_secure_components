import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  selectedCar: string = 'Volvo';
 
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  onChange(ev) {
    this.selectedCar = ev;
    console.log(ev)
  }

  ngOnInit(): void {
  }

}
