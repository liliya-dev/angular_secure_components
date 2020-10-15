import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-large-button',
    templateUrl: './largeButton.component.html',
    styleUrls: ['../button.component.scss', 'largeButton.component.scss'],
})



export class largeButtonComponent implements OnInit {
    @Input() title: string;
    @Input() text: string;
    @Input() classes: string;
    @Input() backgroundColor: string;
    @Input() color: string;

    ngOnInit() {

    }
}
