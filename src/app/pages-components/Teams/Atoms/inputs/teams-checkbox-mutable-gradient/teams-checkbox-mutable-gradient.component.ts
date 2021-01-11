import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

const ACTIVE_CLASS = 'app-checkbox-input-gradient__container active';
const INACTIVE_CLASS = 'app-checkbox-input-gradient__container';

@Component({
  selector: 'app-teams-checkbox-mutable-gradient',
  templateUrl: './teams-checkbox-mutable-gradient.component.html',
  styleUrls: ['./teams-checkbox-mutable-gradient.component.scss']
})

export class TeamsCheckboxMutableGradientComponent implements OnChanges {
  @Input() onActive: boolean;
  @Input() isChecked: boolean;
  @Input() id: string;

  @Output() handleChange: EventEmitter<any> = new EventEmitter();
  
  classes='';

  onToggle = () => {
    this.handleChange.emit(this.id)
  }

  ngOnChanges(): void {
    this.classes = this.onActive ? ACTIVE_CLASS : INACTIVE_CLASS;
  }
}
