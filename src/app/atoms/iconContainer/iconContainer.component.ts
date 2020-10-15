import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon-container',
    templateUrl: './iconContainer.component.html',
    styleUrls: ['iconContainer.component.scss'],
})



export class IconContainerComponent implements OnInit {
    @Input() backgroundColor: string;

    ngOnInit() {

    }
}
