import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

interface Data {
  title: string, 
  isRequired: boolean, 
  type: string, 
  data: {
    id: string,
    placeholderText: string,
    initialValue: string,
  } 
} []

const MOBILE_VIEW = 600;

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})

export class RequestFormComponent implements OnInit, AfterViewInit {
  @Input() initialRequiredFieldsData: Data;
  requiredFieldsData: Data;
  isMobile: boolean;

  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }

  handleChange(id: string) {
    console.log(id)
  }

  ngAfterViewInit() {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
    console.log(this.isMobile, 676)
  }

  ngOnInit() {
    this.requiredFieldsData = JSON.parse(JSON.stringify(this.initialRequiredFieldsData));
  }
}
