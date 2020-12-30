import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-secondary-button',
  templateUrl: './teams-secondary-button.component.html',
  styleUrls: ['./teams-secondary-button.component.scss']
})
export class TeamsSecondaryButtonComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
