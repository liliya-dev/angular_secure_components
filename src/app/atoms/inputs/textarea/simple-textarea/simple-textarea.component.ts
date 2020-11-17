import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-textarea',
  templateUrl: './simple-textarea.component.html',
  styleUrls: ['./simple-textarea.component.scss']
})

export class SimpleTextareaComponent {
  @Input() placeholderText: string;
}
