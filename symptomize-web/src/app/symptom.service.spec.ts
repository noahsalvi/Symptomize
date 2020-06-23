import { TestBed } from '@angular/core/testing';

import { SymptomService } from './symptom.service';

describe('SymptomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymptomService = TestBed.get(SymptomService);
    expect(service).toBeTruthy();
  });
});
