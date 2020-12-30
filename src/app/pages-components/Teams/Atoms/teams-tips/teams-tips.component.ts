import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-tips',
  templateUrl: './teams-tips.component.html',
  styleUrls: ['./teams-tips.component.scss']
})

export class TeamsTipsComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;

  ngOnInit(): void {
  }
}
