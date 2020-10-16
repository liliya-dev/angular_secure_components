import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMenuComponent } from './date-menu.component';

describe('DateMenuComponent', () => {
  let component: DateMenuComponent;
  let fixture: ComponentFixture<DateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
