import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-button',
    templateUrl: './simpleButton.component.html',
    styleUrls: ['../button.component.scss', 'simpleButton.component.scss'],
})



export class simpleButtonComponent implements OnInit {
    @Input() title: string;
    @Input() classes: string;
    @Input() backgroundColor: string;
    @Input() color: string;

    ngOnInit() {

    }
}
