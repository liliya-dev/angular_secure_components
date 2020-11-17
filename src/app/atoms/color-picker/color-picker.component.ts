import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ColorPickerComponent {
  consoleColor = (event) => {
    // your logic on color change
    console.log(event);
  }
}
