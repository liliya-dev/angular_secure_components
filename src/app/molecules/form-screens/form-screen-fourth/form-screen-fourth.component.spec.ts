import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormScreenFourthComponent } from './form-screen-fourth.component';

describe('FormScreenFourthComponent', () => {
  let component: FormScreenFourthComponent;
  let fixture: ComponentFixture<FormScreenFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormScreenFourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormScreenFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
