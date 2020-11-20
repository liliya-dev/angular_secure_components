import { Type } from '@angular/core';

export class AddItem {
  constructor(public component: Type<any>, public dataFromParent: any, public handler: any) {}
}
