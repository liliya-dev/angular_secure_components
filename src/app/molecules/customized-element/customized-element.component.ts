import { Component, ComponentFactoryResolver, ViewEncapsulation, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableComponent } from '../../atoms/tables/dynamic-table/dynamic-table.component';
import { DynamicListComponent } from '../../atoms/tables/dynamic-list/dynamic-list.component';

@Component({
  selector: 'app-customized-element',
  templateUrl: './customized-element.component.html',
  styleUrls: ['./customized-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomizedElementComponent implements OnInit {

  isVisibleButtonsBlock = false;

  setIsVisibleButtonsBlock = (value: boolean) => {
    this.isVisibleButtonsBlock = value;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
    ){}

  @ViewChild('content' , {read: ViewContainerRef}) content:ViewContainerRef;

  addTable(){
    let tableComponent = this.componentFactoryResolver.resolveComponentFactory(DynamicTableComponent);
    this.content.createComponent(tableComponent);
  }

  addList(){
    let listComponent = this.componentFactoryResolver.resolveComponentFactory(DynamicListComponent);
    this.content.createComponent(listComponent);
  }

  ngOnInit(): void {
  }

}
