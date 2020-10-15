import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-link',
    templateUrl: './searchItem.component.html',
    styleUrls: ['searchItem.component.scss'],
})



export class searchItemComponent implements OnInit {
    @Input() title: string;
    @Input() classes: string;

    ngOnInit() {

    }
}
