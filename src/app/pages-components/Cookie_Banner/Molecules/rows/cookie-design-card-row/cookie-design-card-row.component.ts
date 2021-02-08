import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { runInThisContext } from 'vm';

const STATIC_COLOR = 'rgba(1, 25, 73, 0.3)';
const ACTIVE_COLOR = 'rgba(1, 25, 73, 1)';
const CARD_WIDTH = 163;
const MARGIN_RIGHT = 16;
const SCROLL_STEP = 30;

@Component({
  selector: 'app-cookie-design-card-row',
  templateUrl: './cookie-design-card-row.component.html',
  styleUrls: ['./cookie-design-card-row.component.scss']
})

export class CookieDesignCardRowComponent implements OnInit, AfterViewInit {
  @Input() initialSelectedId: string;
  @Input() items: { imgSrc: string, id: string }[];

  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  leftArrowColor = '';
  rightArrowColor = '';
  areArrowsVisible: boolean;
  selectedId: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.areArrowsVisible = this.scrollContainer.nativeElement.clientWidth < this.items.length * CARD_WIDTH;
  }

  onScroll(event) {
    const scroll = event.currentTarget.scrollLeft;
    if (scroll === 0) {
      this.leftArrowColor = STATIC_COLOR;
      this.rightArrowColor = ACTIVE_COLOR;
      return;
    }
    const width = this.scrollContainer.nativeElement.clientWidth + scroll;
    const fullWidth = this.items.length * CARD_WIDTH - MARGIN_RIGHT;
    if (width === fullWidth) {
      this.leftArrowColor = ACTIVE_COLOR;
      this.rightArrowColor = STATIC_COLOR;
    } else {
      this.leftArrowColor = ACTIVE_COLOR;
      this.rightArrowColor = ACTIVE_COLOR;
    }
  }

  scrollOnButtonClick(direction: string) {
    const scroll = this.scrollContainer.nativeElement.scrollLeft;
    let updatedScroll;
    const width = this.scrollContainer.nativeElement.clientWidth;
    const fullWidth = this.items.length * CARD_WIDTH - MARGIN_RIGHT;
    if (direction === 'forward') {
      updatedScroll = scroll + SCROLL_STEP;
    } else {
      updatedScroll = scroll - SCROLL_STEP;
    }
    if (updatedScroll < 0) {
      updatedScroll = 0;
    } else if (updatedScroll > (fullWidth - width)) {
      updatedScroll = fullWidth - width;
    }
    this.scrollContainer.nativeElement.scrollLeft = updatedScroll;
  }

  selectCard(id: string) {
    this.selectedId = id;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.selectedId = this.initialSelectedId;
    this.areArrowsVisible = this.scrollContainer.nativeElement.clientWidth < this.items.length * CARD_WIDTH - MARGIN_RIGHT;
    this.leftArrowColor = STATIC_COLOR;
    this.rightArrowColor = ACTIVE_COLOR;
  }
}
