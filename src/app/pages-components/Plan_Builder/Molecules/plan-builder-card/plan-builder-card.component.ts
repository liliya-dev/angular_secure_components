import { Component, Input, OnChanges, OnInit } from '@angular/core';

const ACTIVE_COLOR = 'linear-gradient(89.52deg, #24B04B -46.17%, #0263BC 186.99%)';
const STATIC_COLOR = 'rgba(1, 25, 73, 0.15)';
const DESKTOP_WIDTH = 376;
const MOBILE_WIDTH = 270;

@Component({
  selector: 'app-plan-builder-card',
  templateUrl: './plan-builder-card.component.html',
  styleUrls: ['./plan-builder-card.component.scss']
})

export class PlanBuilderCardComponent implements OnInit, OnChanges {
  @Input() id: string | number;
  @Input() policyTitle: string;
  @Input() policyText: string;
  @Input() text: string;
  @Input() isSelected: boolean;
  @Input() isMobile: boolean;
  @Input() price: number;
  @Input() period: string;
  @Input() imagePath: string;
  @Input() currency: string;

  borderColor;
  cardWidth;

  selectCard(props) {
    this.borderColor = props.selected ? ACTIVE_COLOR : STATIC_COLOR;

    /// or pass logic from parent element
  }

  ngOnChanges() {
    this.borderColor = this.isSelected ? ACTIVE_COLOR : STATIC_COLOR;
    this.cardWidth = this.isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
  }

  ngOnInit() {
    this.borderColor = this.isSelected ? ACTIVE_COLOR : STATIC_COLOR;
    this.cardWidth = this.isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
  }
}
