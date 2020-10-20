import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-large-button',
    templateUrl: './largeButton.component.html',
    styleUrls: ['../button.component.scss', 'largeButton.component.scss'],
})

export class largeButtonComponent implements OnChanges {
    @Input() title: string;
    @Input() text: string;
    @Input() isActive: string;
    @Input() backgroundColor: string;
    @Input() color: string;

    classes: string;

    ngOnChanges() {
        this.classes = !this.isActive ? "btn-large btn-app--h53 btn-app " : "btn-large active btn-app--h53 btn-app ";
    }
}
