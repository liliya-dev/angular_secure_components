import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {
  activeScreen: number = 1;
  isStarted: boolean = false;
  isMobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = (window.innerWidth < 950) ? true : false;
  }

  changeScreen() {
    if (this.activeScreen === 5) {
      return;
    } else {
      this.activeScreen = this.activeScreen + 1;
    }
  }

  changeScreenToPrevious() {
    if (this.activeScreen === 1) {
      return;
    } else {
      this.activeScreen = this.activeScreen - 1;
    }
  }

  setIsStarted() {
    this.isStarted = true;
  }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth < 950) ? true : false;
  }
}
