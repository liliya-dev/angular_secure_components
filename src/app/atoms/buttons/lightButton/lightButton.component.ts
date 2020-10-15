import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-light-button',
    templateUrl: './lightButton.component.html',
    styleUrls: ['../button.component.scss', 'lightButton.component.scss'],
})



export class lightButtonComponent implements OnInit {
    @Input() classes: string;
    @Input() backgroundColor: string;

    ngOnInit() {

    }
}
