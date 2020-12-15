import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent implements OnInit {

  checkk(s) {
    console.log(s)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
