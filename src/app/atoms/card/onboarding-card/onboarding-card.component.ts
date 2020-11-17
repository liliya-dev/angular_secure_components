import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, OnChanges, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-onboarding-card',
  templateUrl: './onboarding-card.component.html',
  styleUrls: ['./onboarding-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OnboardingCardComponent implements OnChanges {
  @Input() isSelected: boolean;
  @Input() title: string;
  @Input() text: string;
  @Input() id: string;
  
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  onActive = false;
  isMobile: boolean;
  isSmallMobile: boolean;
  isVisibleOptions = false;
  highlitedColor = 'linear-gradient(89.52deg, #24B04B -46.17%, #0263BC 186.99%)';
  staticColor = 'rgb(255, 255, 255)';
  textStaticColor = '#011949'
  cardColor = this.onActive ? this.highlitedColor : this.staticColor;
  textColor = this.onActive ? this.staticColor : this.textStaticColor;
  textDirection = '';

  handleDelete = () => {
    if (this.isMobile) {
      this.isVisibleOptions = false;
    }
    this.delete.emit(this.id);
  }

  handleEdit = () => {
    if (this.isMobile) {
      this.isVisibleOptions = false;
    }
    this.edit.emit(this.id);
  }

  handleShowReports = () => {
    if (this.isMobile) {
      this.isVisibleOptions = false;
    }
    // your logic on press this button
  }

  handleCopy = () => {
    if (this.isMobile) {
      this.isVisibleOptions = false;
    }
    // your logic on press this button
  }
  
  setIsVisibleOptions = () => {
    this.isVisibleOptions = !this.isVisibleOptions;
  }

  setOnActive = (value: boolean) => {
    if (!this.isMobile) {
      this.onActive = value;
      this.cardColor = value ? this.highlitedColor : this.staticColor;
      this.textColor = value ? this.staticColor : this.textStaticColor;
    }
  }

  @ViewChild('block') block: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = this.block.nativeElement.clientWidth;
    this.isMobile = width < 750;
    this.isSmallMobile = width < 420;
  }


  @HostListener('document:click', ['$event'])
	onClick(event: Event) {
    if (!this.block.nativeElement.contains(event.target)) {
      this.isVisibleOptions = false;
    }
  }

  ngOnChanges() {
    const width = document.querySelector('.app-onboarding-card').clientWidth;
    this.isMobile = width < 750;
    this.isSmallMobile = width < 420;
  }
}
