import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-input',
    templateUrl: './formInput.component.html',
    styleUrls: ['formInput.component.scss'],
})



export class formInputComponent implements OnInit {
    @Input() backgroundColor: string;
    @Input() placeholder: string;
    @Input() color: string;
    @Input() classes: string;
    @Input() wrapperClasses: string;

    ngOnInit() {

    }
}
