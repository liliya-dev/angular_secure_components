import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

const INITIAL_COLOR = 'red';

@Component({
  selector: 'app-cookie-color-picker',
  templateUrl: './cookie-color-picker.component.html',
  styleUrls: ['./cookie-color-picker.component.scss']
})

export class CookieColorPickerComponent implements OnInit, OnChanges {
  @Input() defaultHexColor: string;

  color: string;
  value: string;
  isColorPickerVisible: boolean = false;

  @ViewChild('picker') picker: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (this.picker.nativeElement && !this.picker.nativeElement.contains(event.target) 
      && !clickedElement.closest('.app-cookie-color-picker__box') && this.isColorPickerVisible) {
      this.isColorPickerVisible = false;
    }
  }

  setColorPickerVisibility() {
    this.isColorPickerVisible = true;
  }

  consoleColor = (event) => {
    const newColor = event.color.rgb;
    this.color = `rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, ${newColor.a})`;
    this.value = event.color.hex;
  }

  setToDefaultColor() {
    this.color = this.defaultHexColor ? this.defaultHexColor : 'red';
    this.value = this.defaultHexColor ? this.defaultHexColor : 'red';
  }

  setInitialValues() {
    this.color = this.defaultHexColor ? this.defaultHexColor : 'red';
    this.value = this.defaultHexColor ? this.defaultHexColor : 'red';
  }

  ngOnChanges() {
    this.setInitialValues();
  }

  ngOnInit() {
    this.setInitialValues();
  }
}
