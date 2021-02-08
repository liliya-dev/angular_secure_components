import { Component, Input, OnInit } from '@angular/core';

interface Item {
  width: string,
  heigth: string,
  top: string,
  left: string,
  borderRadius: string
}

@Component({
  selector: 'app-cookie-layout-card-row',
  templateUrl: './cookie-layout-card-row.component.html',
  styleUrls: ['./cookie-layout-card-row.component.scss']
})

export class CookieLayoutCardRowComponent implements OnInit {
  @Input() initialSelectedId: string;
  @Input() items: Item[];

  selectedId : string;

  selectCard(id: string) {
    this.selectedId = id;
  }

  ngOnInit(): void {
    this.selectedId = this.initialSelectedId;
  }
}
