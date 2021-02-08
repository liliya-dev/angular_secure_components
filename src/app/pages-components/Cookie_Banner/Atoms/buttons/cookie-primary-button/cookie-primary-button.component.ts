import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-primary-button',
  templateUrl: './cookie-primary-button.component.html',
  styleUrls: ['./cookie-primary-button.component.scss']
})

export class CookiePrimaryButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}
