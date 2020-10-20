import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent {
  activeScreen=1;
  @Input() isMobile: boolean;
  isStarted=false;

  changeScreen() {
    if (this.activeScreen === 5) {
      return
    } else {
      this.activeScreen = this.activeScreen + 1;
    }
  }

  changeScreenToPrevious() {
    if (this.activeScreen === 1) {
      return
    } else {
      this.activeScreen = this.activeScreen - 1;
    }
  }

  setIsStarted() {
    this.isStarted = true;
  }
}
