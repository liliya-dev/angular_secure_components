import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-button',
    templateUrl: './infoButton.component.html',
    styleUrls: ['../button.component.scss', 'infoButton.component.scss'],
})



export class infoButtonComponent implements OnInit {
    @Input() title: string;
    @Input() classes: string;
    @Input() backgroundColor: string;
    @Input() color: string;

    ngOnInit() {

    }
}
