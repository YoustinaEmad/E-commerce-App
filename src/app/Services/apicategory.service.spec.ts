import { TestBed } from '@angular/core/testing';

import { APIcategoryService } from './apicategory.service';

describe('APIcategoryService', () => {
  let service: APIcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
