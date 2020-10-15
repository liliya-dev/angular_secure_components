import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-primary-button',
    templateUrl: './primaryButton.component.html',
    styleUrls: ['../button.component.scss', 'primaryButton.component.scss'],
})



export class primaryButtonComponent implements OnInit {
    @Input() title: string;
    @Input() backgroundColor: string;
    @Input() classes: string;

    ngOnInit() {

    }
}
