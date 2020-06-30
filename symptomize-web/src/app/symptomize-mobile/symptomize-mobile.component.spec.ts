import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomizeMobileComponent } from './symptomize-mobile.component';

describe('SymptomizeMobileComponent', () => {
  let component: SymptomizeMobileComponent;
  let fixture: ComponentFixture<SymptomizeMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomizeMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomizeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
