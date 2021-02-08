import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-layout-card',
  templateUrl: './cookie-layout-card.component.html',
  styleUrls: ['./cookie-layout-card.component.scss']
})
export class CookieLayoutCardComponent implements OnInit {
  @Input() isSelected: boolean;
  @Input() width: string;
  @Input() heigth: string;
  @Input() top: string;
  @Input() left: string;
  @Input() borderRadius: string;

  ngOnInit(): void {
    console.log(this.width, this.heigth, this.borderRadius, this.top, this.left)
  }
}
