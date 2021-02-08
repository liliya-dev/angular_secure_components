import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

const MOBILE_VIEW = 680;

@Component({
  selector: 'app-cookie-editor',
  templateUrl: './cookie-editor.component.html',
  styleUrls: ['./cookie-editor.component.scss']
})

export class CookieEditorComponent implements OnInit, AfterViewInit {
  @Input() intialHTMLContent: string;
  @Input() intialCSSContent: string;

  @Output() onCSSEdit: EventEmitter<any> = new EventEmitter();
  @Output() onHTMLEdit: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  isMobile: boolean;

  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }

  onCloseClick() {
    this.onClose.emit();
  }

  onSaveClick() {
    this.onSave.emit();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }
}
