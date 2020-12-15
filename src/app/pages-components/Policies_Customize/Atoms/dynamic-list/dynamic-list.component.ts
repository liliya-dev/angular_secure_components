import { Component, ViewChild, OnChanges, ElementRef, Input, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
})

export class PoliciesDynamicListComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() handler: EventEmitter<any> = new EventEmitter();
  
  titles: string[];
  listTitle: string;
  isActive: boolean;

  setActive() {
    this.isActive = true;
  }

  @ViewChild('dynamicList') dynamicList: ElementRef; 
  @ViewChild('dynamicContainer') dynamicContainer: ElementRef; 

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.dynamicContainer.nativeElement.contains(event.target) && this.isActive) {
      this.handler.emit(
        {
          sectionId: this.data.sectionId,
          elementId: this.data.sectionElementId,
          type: 'list',
          titles: this.titles,
          listTitle: this.listTitle
        }
      )
      this.isActive = false;
    }
  }

  handlePressKey = (event, i) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.titles.splice(i + 1, 0, 'Type text here');
      setTimeout(() => {
        const inputs = this.dynamicList.nativeElement.querySelectorAll('.app-dynamic-list__input');
        (inputs[i + 1]as HTMLElement).focus();
      }, 100)
    }
  }

  indexTracker(index, id) {
    return index; 
  }

  setData = () => {
    this.listTitle = this.data.listTitle || 'Put title';
    this.titles = this.data.titles || ['Text'];
  }

  ngOnChanges() {
    this.setData();
  }

  ngOnInit() {
    this.setData();
  }
}
