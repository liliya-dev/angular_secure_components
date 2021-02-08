import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-design-card',
  templateUrl: './cookie-design-card.component.html',
  styleUrls: ['./cookie-design-card.component.scss']
})
export class CookieDesignCardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() id: string;
  @Input() isSelected: boolean;

  ngOnInit(): void {}
}
