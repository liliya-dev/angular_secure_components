import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-border-container',
  templateUrl: './gradient-border-container.component.html',
  styleUrls: ['./gradient-border-container.component.scss']
})
export class PoliciesGradientBorderContainerComponent implements OnInit, OnChanges {
  @Input() isSelected: boolean;
  @Input() contentBgColor?: string;
  @Input() height: number;

  DEFAULT_BG_COLOR = '#EAEDF2';
  classes = '';
  color = '';

  setInitialValues() {
    this.classes = this.isSelected ? 'app-container-gradient active' : 'app-container-gradient';
    this.color = this.contentBgColor ? this.contentBgColor : this.DEFAULT_BG_COLOR;
  }

  ngOnInit(): void {
    this.setInitialValues()
  }

  ngOnChanges() {
    this.setInitialValues()
  }
}
