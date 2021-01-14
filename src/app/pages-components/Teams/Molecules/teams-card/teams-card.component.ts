import { Component, Input, ViewChild, ElementRef, OnChanges, HostListener, EventEmitter, Output, AfterViewInit } from '@angular/core';

const HIGHLITED_COLOR = 'linear-gradient(89.52deg, #24B04B -46.17%, #0263BC 186.99%)';
const STATIC_COLOR = 'rgb(255, 255, 255)';
const TEXT_STATIC_COLOR = '#011949';
const SMALL_MOBILE_VIEW = 509;
const BIG_MOBILE_VIEW = 760;

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['./teams-card.component.scss']
})

export class TeamsCardComponent implements OnChanges, AfterViewInit {
  @Input() isSelected: boolean;
  @Input() name: string;
  @Input() email: string;
  @Input() position: string;
  @Input() id: string;
  @Input() tip: { text: string, title: string };
  
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() duplicate: EventEmitter<any> = new EventEmitter();

  onActive = false;
  isMobile: boolean;
  isSmallMobile: boolean;
  isVisibleOptions = false;
  isTipsVisible = false;
  cardColor = this.onActive ? HIGHLITED_COLOR : STATIC_COLOR;
  textColor = '';
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

  handleDuplicate() {
    if (this.isMobile) {
      this.isVisibleOptions = false;
    }
    this.duplicate.emit(this.id);
  }
  
  setIsVisibleOptions = () => {
    this.isVisibleOptions = !this.isVisibleOptions;
  }

  setOnActive = (event, value: boolean) => {
    if (!this.isMobile) {
      if (this.isSelected && !this.isMobile) {
        this.cardColor = HIGHLITED_COLOR;
        this.textColor = STATIC_COLOR;
      } else {
        this.cardColor = value ? HIGHLITED_COLOR : STATIC_COLOR;
        this.textColor = value ? STATIC_COLOR : TEXT_STATIC_COLOR;
      }
    }
    this.onActive = value;
  }

  @ViewChild('block') block: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = this.block.nativeElement.clientWidth;
    this.isMobile = width < BIG_MOBILE_VIEW;
    this.isSmallMobile = width < SMALL_MOBILE_VIEW;

    if (this.isSelected && !this.isMobile && !this.isSmallMobile) {
      this.cardColor = HIGHLITED_COLOR;
      this.textColor = STATIC_COLOR;
    } else {
      this.cardColor = STATIC_COLOR;
      this.textColor = TEXT_STATIC_COLOR;
    }
  }

  @HostListener('document:click', ['$event'])
	onClick(event: Event) {
    if (!this.block.nativeElement.contains(event.target)) {
      this.isVisibleOptions = false;
    }
  }

  setColors() {
    const width = document.querySelector('.app-teams-card').clientWidth;
    this.isMobile = width < BIG_MOBILE_VIEW;
    this.isSmallMobile = width < SMALL_MOBILE_VIEW;
    if ((this.isSelected || this.onActive) && !this.isMobile) {
      this.cardColor = HIGHLITED_COLOR;
      this.textColor = STATIC_COLOR;
    } else {
      this.cardColor = STATIC_COLOR;
      this.textColor = TEXT_STATIC_COLOR;
    }
  }

  checkCheckboxStyle() {
    if (this.isMobile) {
      return false;
    } else {
      return this.onActive ? this.onActive : this.isSelected;
    }
  }

  setTipsVisibility(event, value) {
    this.isTipsVisible = value;
  }

  ngAfterViewInit() {
    this.setColors();
  }

  ngOnChanges() {}
}
