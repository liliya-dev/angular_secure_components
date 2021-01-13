import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.scss']
})

export class TemplateItemComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;

  ngOnInit(): void {}
}
