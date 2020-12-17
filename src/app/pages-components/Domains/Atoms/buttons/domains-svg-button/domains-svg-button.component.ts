import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domains-svg-button',
  templateUrl: './domains-svg-button.component.html',
  styleUrls: ['./domains-svg-button.component.scss']
})

export class DomainsSvgButtonComponent implements OnInit {
  @Input() svgPath: string;
  @Input() borderColor: string;
  @Input() bgColor: string;
  @Input() bgColorHover: string;
  @Input() svgColor: string;
  @Input() isStroke: boolean;

  background = '';
  border = '';

  changeToActiveColor = () => {
    this.border = this.borderColor !== '' ? this.borderColor : 'transparent';
    this.background = this.bgColorHover;
  }

  changeToStaticColor = () => {
    this.border = this.borderColor !== '' ? this.borderColor : 'transparent';
    this.background = this.bgColor;
  }

  ngOnInit(): void {
    this.background = this.bgColor;
    this.border = this.borderColor !== '' ? this.borderColor : 'transparent';
  }
}
