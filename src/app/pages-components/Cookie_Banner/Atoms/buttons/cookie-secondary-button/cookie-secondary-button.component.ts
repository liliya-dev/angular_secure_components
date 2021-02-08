import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-secondary-button',
  templateUrl: './cookie-secondary-button.component.html',
  styleUrls: ['./cookie-secondary-button.component.scss']
})

export class CookieSecondaryButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}
