import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent implements OnInit {
  htmlContent = `
Hi ##Hal##,\n
A person has requested removal. The details of that person are gvhgv vgvtyv bgyugbuy bgukygiuvg\n
Name: ##customer_name##
Email: ##customer_email##
Address: ##customer_address##
Phone: ##customer_Phonenumber##
Request type: ##request_type##
Message: ##customer_Message##

Thank you,
Secure Privacy Team
  `;

  onChange(event) {
    console.log('changed', event);
  }

  constructor() { }

  ngOnInit(): void {}
}
