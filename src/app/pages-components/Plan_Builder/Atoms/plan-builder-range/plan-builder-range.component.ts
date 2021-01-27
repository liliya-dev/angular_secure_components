import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

const THUMB_WIDTH = 20;
const VALUE_WIDTH = 80;
const MOBILE_WIDTH = 850;

@Component({
  selector: 'app-plan-builder-range',
  templateUrl: './plan-builder-range.component.html',
  styleUrls: ['./plan-builder-range.component.scss']
})

export class PlanBuilderRangeComponent implements OnInit, AfterViewInit {
  @Input() points: number[];
  @Input() value: number;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  leftDocumentPosition;
  isMoving = false;
  left;
  containerWidth;
  sectionWidth;
  filledTrackWidth = 0;
  isMobile;
  activePoint;

  @ViewChild('container') container: ElementRef;

  setIsMoving(event, value) {
    this.isMoving = value;
  }

  detectPosition(index) {
    switch (index) {
      case 0: 
        return 0;
      case this.points.length - 1:
        return this.isMobile ? - 15 : - VALUE_WIDTH;
      default:
        return this.isMobile ? - 5 : - VALUE_WIDTH / 2;
    }
  }

  @HostListener('document:mouseup', ['$event']) 
  onMouseUp() {
    if (this.isMoving) {
      this.stopMoving();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.containerWidth = document.querySelector('.app-plan-builder-range').clientWidth;
    this.leftDocumentPosition = document.querySelector('.app-plan-builder-range').getBoundingClientRect().x;
    this.sectionWidth = this.containerWidth / (this.points.length - 1);
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_WIDTH;
    this.stopMoving();
  }

  detectActivePoint() {
    const index = Math.round(this.left / this.sectionWidth) > this.points.length - 1 
                            ? this.points.length - 1 
                            : Math.round(this.left / this.sectionWidth);
                            
    this.activePoint = index;
    this.onChange.emit(index);
  }

  stopMoving() {
    let coordinatesX = this.activePoint * this.sectionWidth - THUMB_WIDTH / 2;
    this.isMoving = false;
    this.filledTrackWidth = coordinatesX + THUMB_WIDTH / 2;
    this.left = coordinatesX;
  }

  moveThumb(ev) {
    if (this.isMoving) {
      this.detectActivePoint();
      let coordinatesX = ev.clientX - THUMB_WIDTH / 2 - this.leftDocumentPosition;
      this.filledTrackWidth = coordinatesX + THUMB_WIDTH / 2;
      if (coordinatesX + THUMB_WIDTH / 2 > this.containerWidth) {
        this.left = this.containerWidth - THUMB_WIDTH / 2;
      } else if (coordinatesX + THUMB_WIDTH / 2 < 0) {
        this.left = - THUMB_WIDTH / 2;
      } else {
        this.left = coordinatesX;
      }
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.containerWidth = document.querySelector('.app-plan-builder-range').clientWidth;
    this.isMobile = document.querySelector('.app-plan-builder-range__container').clientWidth < MOBILE_WIDTH;
    this.leftDocumentPosition = document.querySelector('.app-plan-builder-range').getBoundingClientRect().x;
    this.sectionWidth = this.containerWidth / (this.points.length - 1);
    const activeIndex = this.points.findIndex(point => point === this.value);
    this.activePoint = activeIndex;
    let coordinatesX = activeIndex * this.sectionWidth - THUMB_WIDTH / 2;
    this.filledTrackWidth = coordinatesX + THUMB_WIDTH / 2;
    this.left = coordinatesX;
  }
}
