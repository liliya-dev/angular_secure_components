import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-input-simple',
  templateUrl: './checkbox-input-simple.component.html',
  styleUrls: ['./checkbox-input-simple.component.scss']
})
export class CheckboxInputSimpleComponent implements OnInit {
  @Input() isChecked: boolean;
  @Input() title: string;

  ngOnInit(): void {
    console.log()
  }

}
