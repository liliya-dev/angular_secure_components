import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})

export class PoliciesColorPickerComponent implements OnChanges, OnInit {
  @Input() startHexColor: string;

  color: string;
  value: string;
  isColorPickerVisible: boolean = false;

  @ViewChild('picker') picker: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (this.picker.nativeElement && !this.picker.nativeElement.contains(event.target) 
      && !clickedElement.closest('.color-picker__box') && this.isColorPickerVisible) {
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

  ngOnChanges() {
    this.color = this.startHexColor ? this.startHexColor : '#011949';
    this.value = this.startHexColor ? this.startHexColor : '#011949';
  }

  ngOnInit() {
    this.color = this.startHexColor ? this.startHexColor : '#011949';
    this.value = this.startHexColor ? this.startHexColor : '#011949';
  }
}
