import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-primary-button',
  templateUrl: './request-primary-button.component.html',
  styleUrls: ['./request-primary-button.component.scss']
})

export class RequestPrimaryButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}
