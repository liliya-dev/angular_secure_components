import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-svg-button',
  templateUrl: './teams-svg-button.component.html',
  styleUrls: ['./teams-svg-button.component.scss']
})

export class TeamsSvgButtonComponent implements OnInit {
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
