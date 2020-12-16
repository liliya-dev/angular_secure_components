import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent implements OnInit {
  @Input() htmlContent: string;

  onChange(event) {
    console.log('changed', event);
  }

  constructor() { }

  ngOnInit(): void {}
}
