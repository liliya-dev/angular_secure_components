import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})

export class TextEditorComponent implements OnInit {
  @Input() htmlContent: string;

  onChange(event) {
    console.log('changed', event);
  }

  ngOnInit(): void {}
}
