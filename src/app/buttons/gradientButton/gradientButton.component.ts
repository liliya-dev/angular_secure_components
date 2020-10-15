import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-gradient-button',
    templateUrl: './gradientButton.component.html',
    styleUrls: ['../button.component.scss', 'gradientButton.component.scss'],
})



export class gradientButtonComponent implements OnInit {
    @Input() title: string;
    @Input() classes: string;
    @Input() backgroundColor: string;
    @Input() color: string;

    ngOnInit() {

    }
}
