import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraysExampleComponent } from './form-arrays-example.component';

describe('FormArraysExampleComponent', () => {
  let component: FormArraysExampleComponent;
  let fixture: ComponentFixture<FormArraysExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArraysExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArraysExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
