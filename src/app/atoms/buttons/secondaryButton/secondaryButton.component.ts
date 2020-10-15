import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-secondary-button',
    templateUrl: './secondaryButton.component.html',
    styleUrls: ['../button.component.scss', 'secondaryButton.component.scss'],
})



export class secondaryButtonComponent implements OnInit {
    @Input() title: string;
    @Input() backgroundColor: string;
    @Input() color: string;
    @Input() classes: string;

    ngOnInit() {

    }
}
