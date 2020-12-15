import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class PoliciesDynamicTextComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() handler: EventEmitter<any> = new EventEmitter()

  isActive: boolean;
  title: string;

  setIsActive() {
    this.isActive = true;
  }

  @ViewChild('text') text: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.text.nativeElement.contains(event.target) && this.isActive) {
      this.handler.emit(
        {
          sectionId: this.data.sectionId,
          elementId: this.data.sectionElementId,
          title: this.title,
          type: 'text'
        }
      )
      this.isActive = false;
    }
  }

  ngOnInit(): void {
    this.title = this.data.title;
  }

  ngOnChanges(): void {
    this.title = this.data.title;
  }
}
