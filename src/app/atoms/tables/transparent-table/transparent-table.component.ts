import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparent-table',
  templateUrl: './transparent-table.component.html',
  styleUrls: ['./transparent-table.component.scss']
})

export class TransparentTableComponent implements OnInit {
  @Input() heads: string[];
  @Input() data: any[];
  @Input() mainColumn: string;
  
  isMobile: boolean;
  activeColumn: string;
  headsListWithoutMain: string[];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = (event.target.innerWidth < 800) ? true : false;
  }

  showNext(direction: string) {
    const currentIndex = this.headsListWithoutMain.findIndex(head => head === this.activeColumn);
    let nextIndex;
    
    if (direction =='forward') {
      nextIndex = (currentIndex + 1 > this.headsListWithoutMain.length - 1) ? 0 : currentIndex + 1; 
    } else if (direction =='back') {
      nextIndex = (currentIndex - 1 < 0) ? this.headsListWithoutMain.length - 1 : currentIndex - 1; 
    }
    this.activeColumn = this.headsListWithoutMain[nextIndex]
  }

  checkType (value: any) {
    switch (typeof value) {
      case 'boolean':
        return 'boolean';
      case 'string':
        return 'string';
      case 'object': 
        return value.type
    }
  }

  ngOnInit(): void {
    this.headsListWithoutMain = this.heads.filter(head => head !== this.mainColumn);
    this.activeColumn = this.headsListWithoutMain[0];
    this.isMobile = (window.innerWidth < 800) ? true : false;
  }
}
