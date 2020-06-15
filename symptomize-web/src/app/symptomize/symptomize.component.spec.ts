import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomizeComponent } from './symptomize.component';

describe('SymptomizeComponent', () => {
  let component: SymptomizeComponent;
  let fixture: ComponentFixture<SymptomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
