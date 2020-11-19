import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnChanges } from '@angular/core';

import { AddDirective } from './add.directive';
import { AddItem } from './add-item';

export interface AdComponent {
  data: any;
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
  currentAdIndex = -1;
  @ViewChild(AddDirective, {static: true}) adHost: AddDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const adItem = this.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.dataFromParent;
  }
}