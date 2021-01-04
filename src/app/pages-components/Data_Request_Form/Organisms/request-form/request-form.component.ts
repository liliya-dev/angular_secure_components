import { Component, Input, OnInit } from '@angular/core';

interface Data {
  title: string, 
  isRequired: boolean, 
  type: string, 
  data: {
    id: string,
    placeholderText: string,
    initialValue: string,
  } 
} []

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})

export class RequestFormComponent implements OnInit {
  @Input() initialRequiredFieldsData: Data;
  requiredFieldsData: Data;

  handleChange(id: string) {
    console.log(id)
  }

  ngOnInit(): void {
    this.requiredFieldsData = JSON.parse(JSON.stringify(this.initialRequiredFieldsData));
  }
}
