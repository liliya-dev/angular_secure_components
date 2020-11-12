import { Component, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-onboarding-card',
  templateUrl: './onboarding-card.component.html',
  styleUrls: ['./onboarding-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnboardingCardComponent {
  @Input() isSelected: boolean;
  @Input() title: string;
  @Input() text: string;

  onActive = false;

  setOnActive = (value: boolean) => {
    this.onActive = value;
    console.log(value)
  }
}
