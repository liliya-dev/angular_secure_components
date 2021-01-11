import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-textarea-copy-to-clipboard',
  templateUrl: './textarea-copy-to-clipboard.component.html',
  styleUrls: ['./textarea-copy-to-clipboard.component.scss']
})

export class TextareaCopyToClipboardComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() initialValue: string;

  isButtonVisible: boolean = false;

  @ViewChild('textarea') textarea: HTMLElement;

  value = '';

  setVisibleButton(value: boolean) {
    this.isButtonVisible = value;
  }

  copyToClipboard (inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
