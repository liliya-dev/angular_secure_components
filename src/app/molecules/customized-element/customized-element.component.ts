import { Component, ComponentRef, ComponentFactoryResolver, ViewEncapsulation, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableComponent } from '../../atoms/tables/dynamic-table/dynamic-table.component';

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

  @ViewChild('content' , {read: ViewContainerRef}) content:ViewContainerRef;
    
  constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  private componentRef: ComponentRef<any>;

  addTable(){
    let tableComponent = this.componentFactoryResolver.resolveComponentFactory(DynamicTableComponent);
    this.content.createComponent(tableComponent);
    console.log(tableComponent.componentType)
  }

  ngOnInit(): void {
  }

}
