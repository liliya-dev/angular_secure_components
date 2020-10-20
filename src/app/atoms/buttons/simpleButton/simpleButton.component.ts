import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-simple-button',
    templateUrl: './simpleButton.component.html',
    styleUrls: ['../button.component.scss', 'simpleButton.component.scss'],
})



export class simpleButtonComponent {
    @Input() title: string;
    @Input() classes: string;
    @Input() backgroundColor: string;
    @Input() color: string;
}
