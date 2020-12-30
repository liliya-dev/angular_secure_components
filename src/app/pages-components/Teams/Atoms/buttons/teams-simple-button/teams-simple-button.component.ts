import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teams-simple-button',
  templateUrl: './teams-simple-button.component.html',
  styleUrls: ['teams-simple-button.component.scss'],
})

export class TeamsSimpleButtonComponent {
  @Input() title: string;
  @Input() classes: string;
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() srcPath?: string;
}
