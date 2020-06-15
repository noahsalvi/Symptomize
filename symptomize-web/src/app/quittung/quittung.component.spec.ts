import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuittungComponent } from './quittung.component';

describe('QuittungComponent', () => {
  let component: QuittungComponent;
  let fixture: ComponentFixture<QuittungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuittungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuittungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
