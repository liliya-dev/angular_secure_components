import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-link',
    templateUrl: './navLink.component.html',
    styleUrls: ['navLink.component.scss'],
})



export class navLinkComponent implements OnInit {
    @Input() title: string;
    @Input() classes: string;

    ngOnInit() {

    }
}
