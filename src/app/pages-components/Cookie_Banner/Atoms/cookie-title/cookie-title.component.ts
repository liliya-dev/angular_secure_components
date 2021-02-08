import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-title',
  templateUrl: './cookie-title.component.html',
  styleUrls: ['./cookie-title.component.scss']
})

export class CookieTitleComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}
