import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-button',
  templateUrl: './mobile-button.component.html',
  styleUrls: ['./mobile-button.component.scss', '../button.component.scss']
})
export class MobileButtonComponent implements OnInit {
  @Input() isOpen: boolean;

  ngOnInit(): void {
  }

}
