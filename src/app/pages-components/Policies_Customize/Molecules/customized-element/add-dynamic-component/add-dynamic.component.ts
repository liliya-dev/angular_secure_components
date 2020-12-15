import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnChanges, EventEmitter, Output } from '@angular/core';

import { AddDirective } from './add.directive';
import { AddItem } from './add-item';

export interface AdComponent {
  data: any;
  handler: any
}

@Component({
  selector: 'app-add-dynamic',
  template: `
              <div class="add-dynamic-component">
                <ng-template adHost></ng-template>
              </div>
            `
})

export class AddComponent implements OnInit {
  @Input() component: AddItem;
  @Output() handler: EventEmitter<any> = new EventEmitter();

  @ViewChild(AddDirective, {static: true}) adHost: AddDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent() {
    const adItem = this.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.dataFromParent;
    componentRef.instance.handler.subscribe(val => {
      this.handler.emit(val);
    });
    componentRef.changeDetectorRef.detectChanges();
    return componentRef
  }

  ngOnInit() {
    this.loadComponent();
  }
}